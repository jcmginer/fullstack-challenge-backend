const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploadImage = async function (filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'challenge'
    })
};

exports.deleteImage = async function (publicId) {
    return await cloudinary.upload.destroy(publicId)
};