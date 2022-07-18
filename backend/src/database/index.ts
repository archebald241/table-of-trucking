import {
  Sequelize,
} from "sequelize";

export const sequelize = new Sequelize("postgres://postgres:postgres@postgres:5432/postgres");

startDatabase();

async function startDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};