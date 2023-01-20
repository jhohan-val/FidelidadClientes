import Marcas from "../models/MarcaModel.js";

const mostrarMarca = async  (req, res) => {
    try {
        const Marca = await Marcas.findAll()
        res.json(Marca)
    } catch (error) {
        res.json({
        Message: 'no se pudieron mostrar las marcas'+error
    })
    }
}

export {
    mostrarMarca
}