import Departamentos from "../models/DepartamentosModel.js";

const mostrarDepartamentos = async(req, res)=>{
    try {
        const departamento = await Departamentos.findAll();
        res.json(departamento)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export {mostrarDepartamentos}