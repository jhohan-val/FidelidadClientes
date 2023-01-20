import express from 'express';
import cors from 'cors';
import marcaRouter from './routers/MarcaRouters.js';
import paisesRouter from './routers/PaisesRouters.js';
import documentoRouter from './routers/TipoDocumentosRouters.js';
import departamentoRouter from './routers/DepartamentosRouters.js';
import clienteRouter from './routers/ClientesRouters.js';
import ciudadRouter from './routers/CiudadesRouters.js';
import dataBaseFidelizacion from './database/dataBase.js';

const app = express();
const port = 2002;

try {
    await dataBaseFidelizacion.authenticate()
    console.log(`Conexion exitosa a la base de datos`)
} catch (error) {
    console.log(`Conexion no exitosa: ${error}`)
}

app.use(cors())
app.use(express.json())

app.use('/marcas', marcaRouter)
app.use('/paises', paisesRouter)
app.use('/documentos', documentoRouter)
app.use('/departamentos', departamentoRouter)
app.use('/clientes', clienteRouter)
app.use('/ciudades', ciudadRouter)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:2002`)
});