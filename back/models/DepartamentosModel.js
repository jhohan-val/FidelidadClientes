import { DataTypes } from "sequelize";
import dataBaseFidelizacion from "../database/dataBase.js";

const Departamentos = dataBaseFidelizacion.define('departamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departamento: {
        type: DataTypes.STRING(60),

    },
    pais_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pais',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
});

export default Departamentos