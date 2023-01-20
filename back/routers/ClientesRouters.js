import express from "express";
import { crearCliente } from "../controllers/clientesControllers.js";

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente)

export default clienteRouter