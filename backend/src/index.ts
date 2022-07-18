import bodyParser from "body-parser";
import { App } from "./app/app";
import { getDotEnv } from "./utils/getDotEnv";
import express from "express";
import { TruckingRouter } from "./router/trucking/truckingRouter";
import cors from "cors";
require("./database/index");

const port = +getDotEnv("port")
const app = new App({
  port,
  middlewares: [bodyParser.urlencoded({ extended: true }), express.json(), cors({origin: "*"})],
  routers: [new TruckingRouter("/trucking")],
  baseUrl: "/",
});

app.start();
