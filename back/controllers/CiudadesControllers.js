import Ciudades from "../models/CiudesdesModels.js";

const mostrarCiudades = async(req, res)=>{
    try {
        const Ciudad = await Ciudades.findAll();
        res.json(Ciudad)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export {mostrarCiudades}