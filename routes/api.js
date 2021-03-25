const router = require('express').Router();
const multer = require('multer');

const uploader = require('../tools/uploader');

router.post('/image', (req,res)=>{
    const upload = uploader.single('image');

    upload(req,res, err=>{
        if(err instanceof multer.MulterError)
            res.status(500).json({error: "Server Error"});
        else if(err)
            res.status(400).json({error: err.message});
        else
            res.json({result: true});
    });
});

module.exports = router;