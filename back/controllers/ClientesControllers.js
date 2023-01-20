import Clientes from "../models/clientesModel.js";

const crearCliente = async(req, res)=>{
    try {
        await Clientes.create(req.body);
        res.json({
            message: "Cliente creado correctamente"
        })
    } catch (error) {
        res.json({
            message: "No se pudo registrar cliente " + error
        });
    }
};

export {crearCliente}