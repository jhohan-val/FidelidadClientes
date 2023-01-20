import { DataTypes } from "sequelize";
import dataBaseFidelizacion from "../database/dataBase.js";

const Ciudades = dataBaseFidelizacion.define('ciudades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ciudad: {
        type: DataTypes.STRING(70),

    },
    departamento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departamento',
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

export default Ciudades