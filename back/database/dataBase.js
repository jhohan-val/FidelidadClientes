import { Sequelize } from "sequelize";

const dataBaseFidelizacion = new Sequelize('inscrito', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default dataBaseFidelizacion