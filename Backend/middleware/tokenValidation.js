const {response} = require('express')
const jwt        = require('jsonwebtoken');

const validateJwt = (req, res = response, next ) => {
    const authHeader = req.get('Authorization');

    if(!authHeader){
        return res.status(401).json({
            ok: false, 
            msg: 'no hay token en la petición' 
        });
    }

    if(authHeader){
         // Obtener el Token 
        const token = authHeader.split(' ')[1];

        if(token){
            try {
                const {uid, name} = jwt.verify(token, process.env.SECRETA );
                req.uid= uid;
                req.name= name;
                
            } catch (error) {
                return res.status(401).json({
                    ok: false, 
                    msg: 'token no válido' 
                }); 
            }

        }
    }
    next();
}

module.exports = { validateJwt}