import express from 'express';
import { mostrarCiudades } from '../controllers/CiudadesControllers.js';

const ciudadRouter = express.Router();

ciudadRouter.get('/', mostrarCiudades);

export default ciudadRouter 