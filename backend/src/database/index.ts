import { getDotEnv } from "../utils/getDotEnv";
import {
  Dialect,
  Sequelize,
} from "sequelize";

// const urlConnect = getDotEnv("BD_HOST");

export const sequelize = new Sequelize({
  database: getDotEnv("db_name"),
  username: getDotEnv("db_user"),
  port: +getDotEnv("db_port"),
  password: getDotEnv("db_pass"),
  dialect: getDotEnv("db_dialect") as Dialect,
  host: getDotEnv("node_env") === "development"||"test" ? "localhost" : "postgres",
});

startDatabase();

async function startDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};