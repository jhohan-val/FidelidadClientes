import express from 'express';
import { mostrarPaises } from '../controllers/PaisesControllers.js';

const paisesRouter = express.Router();

paisesRouter.get('/', mostrarPaises);

export default paisesRouter 