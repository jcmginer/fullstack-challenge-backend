const User = require("../models/users.model");

const checkUser = (req, res) => {
    const params = req.params

    User.find({ email: params.email }, (error, data) => {
        if (error || !data) {
            return res.status(500).json({
                status: "error",
                mensaje: "Error"
            })
        }
        if (!!data.length) {
            console.log('El usuario existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "console"
            })
        } else {
            console.log('El usuario no existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: false,
                mensaje: "This email is not in the database"
            })
        }
    })
}

const createUser = (req, res) => {
    try {
        let params = req.body;

        const $user = new User(params)

        $user.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "No se ha guardado el post"
                })
            }
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El post ha sido guardado"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el post"
        })
    }
}

module.exports = {
    checkUser,
    createUser
}
