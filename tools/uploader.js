const path = require('path');
const multer = require('multer');

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..','public','uploaded-images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${req.session.user.username}-${Date.now()}-${file.originalname}`);
    }
});

module.exports = multer({
    storage: imageStorage,
    fileFilter: (req, file, cb) => {
        if(file.originalname.match(/\.(jpg|jpeg|png)$/))
            cb(null, true)
        else
            cb(new Error("Invalid file type"), false);
    }
});