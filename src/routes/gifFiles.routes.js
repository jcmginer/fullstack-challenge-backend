const express = require("express");
const router = express.Router();
const { getAllGifFiles, createGifFile } = require("../controllers/gifFiles.controller");
const fileUpload = require("express-fileupload");

router.get('/get/', getAllGifFiles)

router.post('/', fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}), createGifFile)


module.exports = router;