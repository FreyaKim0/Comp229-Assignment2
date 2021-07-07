const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/images");
  },
  filename: (req, file, cb) => {
    const mimeType = file.mimetype.split("/");
    const fileType = mimeType[1];
    let fileName = file.originalname + "-" + Date.now() + "." + fileType;
    cb(null, fileName);
  },
});

const storage = multer({ storage: diskStorage }).single("image0");
module.exports = storage;
