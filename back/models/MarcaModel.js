import { DataTypes } from "sequelize";
import dataBaseFidelizacion from "../database/dataBase.js";

const Marcas = dataBaseFidelizacion.define('marcas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_marca: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Marcas