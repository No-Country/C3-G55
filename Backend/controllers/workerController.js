const {response}    = require('express')
const bcrypt        = require('bcryptjs');
const Worker        = require('../models/worker')
const {generatejwt} = require('../helpers/Token')
const Date          = require('../models/date')



const newWorker = async (req, res = response) => {
    const { password} = req.body
    try {
        trabajador = new Worker(req.body)

        // Hashear el password
        const salt =  bcrypt.genSaltSync();
        trabajador.password = bcrypt.hashSync(password, salt );
       
        await trabajador.save()

        const token = await generatejwt(trabajador._id, trabajador.name)


        res.status(201).json({
            ok: true,
            token,
            uid: trabajador._id,
            name: trabajador.name,
            number:trabajador.number,
            description: trabajador.description,
            msg: "Nuevo compañero de trabajo",
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error al crear Usuario",
        })
    }
}

const allWorker = async (req, res = response) => {
    const wokers = await Worker.find()

    res.json({
        ok: true,
        wokers
    });                     
}

const loginWorker =  async (req, res = response) => {
    const { email, password} = req.body
 
    try {
        let trabajador = await Worker.findOne({ email });

        if(!trabajador) {
            return res.status(400).json({
                ok: false, 
                msg: 'el trabajador no se encuentra registrado' 
            });
        }

        const validatePassword = bcrypt.compareSync(password, trabajador.password)
        if(!validatePassword) {
            return res.status(400).json({
                ok: false, 
                msg: 'password incorrecto' 
            });
        }
      
        const token = await generatejwt(trabajador._id, trabajador.name)

        res.status(201).json({
            ok: true,
            uid: trabajador._id,
            name: trabajador.name,
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

const allDates =  async (req, res = response) => {
 
    const evento = await Date.find( {worker: req.uid });
    console.log(evento)
 
    /*try {
        let trabajador = await Worker.findOne({ email });

        if(!trabajador) {
            return res.status(400).json({
                ok: false, 
                msg: 'el trabajador no se encuentra registrado' 
            });
        }

        const validatePassword = bcrypt.compareSync(password, trabajador.password)
        if(!validatePassword) {
            return res.status(400).json({
                ok: false, 
                msg: 'password incorrecto' 
            });
        }
      
        const token = await generatejwt(trabajador._id, trabajador.name)

        res.status(201).json({
            ok: true,
            uid: trabajador._id,
            name: trabajador.name,
            token,
            msg: "Login Correcto",
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error al ingresar ",
        })
    }*/
}




module.exports = {newWorker, allWorker, loginWorker, allDates}