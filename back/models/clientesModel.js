import { DataTypes } from "sequelize";
import dataBaseFidelizacion from "../database/dataBase.js";

const Clientes = dataBaseFidelizacion.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_identificacion_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'tipoDocumento',
            key: 'id'
        }
    },
    numero_identificacion:{
        type: DataTypes.STRING(11)
    },
    nombres:{
        type: DataTypes.STRING(50)
    },
    apellidos: {
        type: DataTypes.STRING(50)
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING(200)
    },
    pais_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'paises',
            key: 'id'
        }
    },
    marca_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'marca',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
})

export default Clientes