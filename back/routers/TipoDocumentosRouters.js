import express from 'express';
import { mostrardocumento } from '../controllers/TipoDocumentoControllers.js';

const documentoRouter = express.Router();

documentoRouter.get('/', mostrardocumento);

export default documentoRouter 