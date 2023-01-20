import paises from "../models/PaisesModel.js"

const mostrarPaises = async  (req, res) => {
    try {
        const pais = await paises.findAll()
        res.json(pais)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia.'
    })
    }
}

export {
    mostrarPaises
}