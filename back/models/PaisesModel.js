import { DataTypes } from "sequelize";
import dataBaseFidelizacion from "../database/dataBase.js";

const paises = dataBaseFidelizacion.define('paises', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pais: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default paises