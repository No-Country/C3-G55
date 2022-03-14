const {response}    = require('express')
const bcrypt        = require('bcryptjs');
const Usuario       =  require('../models/User')
const {generatejwt} = require('../helpers/Token')


const newUser = async (req, res = response) => {
    const { email, password} = req.body

    try {
        let usuario = await Usuario.findOne({ email });
        if(usuario) {
            return res.status(400).json({
                ok: false, 
                msg: 'El usuario ya esta registrado' 
            });
        }
    
        usuario = new Usuario(req.body)

        // Hashear el password
        const salt =  bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt );

        await usuario.save()
      
        const token = await generatejwt(usuario._id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            number:usuario.number,
            token,
            msg: "usuario creado correctamente",
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error al crear Usuario",
        })
    }
}

const login =  async (req, res = response) => {
    const { email, password} = req.body

    try {
        let usuario = await Usuario.findOne({ email });

        if(!usuario) {
            return res.status(400).json({
                ok: false, 
                msg: 'el usuario no se encuentra registrado' 
            });
        }

        const validatePassword = bcrypt.compareSync(password, usuario.password)
        if(!validatePassword) {
            return res.status(400).json({
                ok: false, 
                msg: 'password incorrecto' 
            });
        }
      
        const token = await generatejwt(usuario._id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token,
            msg: "Login Correcto",
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error al ingresar ",
        })
    }
}

const token = async (req, res = response) => {
    const uid = req.uid;
    const name = req.name;
    const token = await generatejwt(uid, name)
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token'
        });
    }
    res.json({
        ok: true,
        msg: "Token Generado",
        token,
        uid,
        name
    })
}




module.exports = {newUser, login, token }