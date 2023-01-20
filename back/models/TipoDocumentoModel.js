import { DataTypes } from "sequelize";
import dataBaseFidelizacion from "../database/dataBase.js";

const documentos = dataBaseFidelizacion.define('tipos_identificaciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_documento: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default documentos