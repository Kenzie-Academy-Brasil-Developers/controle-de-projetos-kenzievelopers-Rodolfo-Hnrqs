import { Router } from "express";
import middlewares from "../middlewares";
import { projectsController } from "../controllers";

const projectsRouter: Router = Router();

projectsRouter.post("", middlewares.verifyDeveloperIdBody, projectsController.create);

projectsRouter.use("/:id", middlewares.verifyProjectIdParams);

projectsRouter.get("/:id", projectsController.retrieve);
projectsRouter.patch("/:id", middlewares.verifyDeveloperIdBody, projectsController.update);

export default projectsRouter;