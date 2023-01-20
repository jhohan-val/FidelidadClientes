import express from 'express';
import { mostrarMarca } from '../controllers/MarcaCotrollers.js';

const marcaRouter = express.Router();

marcaRouter.get('/', mostrarMarca);

export default marcaRouter 