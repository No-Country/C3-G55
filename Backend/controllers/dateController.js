const {response}    = require('express')
const Date          = require('../models/date')


const newDate = async (req, res = response) => {
   const turno = new Date(req.body)
   const {worker} = req.body

   try {
    
       turno.user = req.uid;
       turno.worker= worker
       const turnoSave = await turno.save();
       res.json({
           ok: true,
           turno: turnoSave,
           msg: 'Turno Creado Correctamente'
       })
   } catch (error) {
       console.log(error)
       res.status(500).json({
           ok: false,
           msg: 'Error al crear Evento'
       });
   }
}

module.exports = {newDate }