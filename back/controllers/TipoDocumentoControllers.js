import documentos from "../models/TipoDocumentoModel.js"

const mostrardocumento = async  (req, res) => {
    try {
        const Marca = await documentos.findAll()
        res.json(Marca)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia. '
    })
    }
}

export {
    mostrardocumento
}