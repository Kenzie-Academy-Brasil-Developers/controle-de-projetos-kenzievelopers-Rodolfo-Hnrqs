import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import middlewares from "./middlewares";
import { developerRouter, projectsRouter } from "./routers";

const app: Application = express();
app.use(json());

app.use("/developers", developerRouter);

app.use("/projects", projectsRouter);

app.use(middlewares.handleError);

export default app;
