import { Sequelize } from "sequelize-typescript";
import User from "../models/User";



require('dotenv').config();
const sequelizeConnexion = new Sequelize({
    logging: false,
    dialect: 'postgres',
    host: process.env.DB_HOST, 
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    models: [ 
      User// -- ADD your models here
                ],
  });


export const Connection = async () : Promise<void> => {
    try {
      await sequelizeConnexion.authenticate();
      console.log('DataBase connection has been established successfully.');
      await sequelizeConnexion.sync({ alter: true }); // Sync models
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
export default sequelizeConnexion;




  