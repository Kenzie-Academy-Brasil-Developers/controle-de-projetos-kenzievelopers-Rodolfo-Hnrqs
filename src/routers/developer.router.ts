import { Router } from "express";
import { developerCotrollers, developerInfosControllers } from "../controllers";
import middlewares from "../middlewares";

const developerRouter: Router = Router();

developerRouter.post("", middlewares.verifyEmail, developerCotrollers.create);

developerRouter.use("/:id", middlewares.verifyDeveloperId);

developerRouter.get("/:id", developerCotrollers.retrieve);

developerRouter.patch("/:id", middlewares.verifyEmail, developerCotrollers.update);

developerRouter.delete("/:id", developerCotrollers.destroy);

developerRouter.post("/:id/infos", middlewares.verifyOS, middlewares.verifyDeveloperInfosExists, developerInfosControllers.create);

export default developerRouter;