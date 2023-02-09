const GifFile = require("../models/gifFiles.model");
const { uploadImage, deleteImage } = require("../utils/cloudinary");

const getAllGifFiles = (req, res) => {
    const gifFiles = GifFile.find({})

    gifFiles.exec((error, data) => {
        if (error || null) {
            return res.status(404).json({
                status: "error",
                message: "Gif not found"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            message: "The gif are available"
        })
    })
}

const createGifFile = async (req, res) => {
    const { body } = req;
    try {
        const gifFile = new GifFile({ ...body });




        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            gifFile.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            console.log(result)

            await FileSystem.unlink(req.files.image.tempFilePath)


        }






        await gifFile.save();
        res.json(201).json({ message: 'Successfully created gif', data: gifFile });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteGifFile = async (req, res) => {

    try {
        const gifFile = await GifFile.findByIdAndDelete(req.params.id)

        if (!gifFile) return res.status(404).json({
            message: 'gif does not exist'
        })
        await deleteImage(gifFile.public_id)

        return res.json(gifFile)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createGifFile,
    getAllGifFiles,
    deleteGifFile

}