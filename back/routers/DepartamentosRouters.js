import express from 'express';
import { mostrarDepartamentos } from '../controllers/DepartamentosControllers.js';

const departamentoRouter = express.Router();

departamentoRouter.get('/', mostrarDepartamentos);

export default departamentoRouter 