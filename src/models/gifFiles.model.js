const { Schema, model } = require("mongoose");

const GifFileSchema = Schema({

    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false
    },
    image: {
        public_id: String,
        secure_url: String
    }

});

module.exports = model("GifFile", GifFileSchema, "giffiles");