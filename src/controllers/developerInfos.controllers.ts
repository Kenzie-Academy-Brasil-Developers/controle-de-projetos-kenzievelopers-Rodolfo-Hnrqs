import { Request, Response } from "express";
import { developerInfos, developerInfosCreate } from "../interfaces";
import { developerInfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload: developerInfosCreate = { ...req.body, developerId: req.params.id };
    const developerInfos: developerInfos = await developerInfosServices.create(payload);

    return res.status(201).json(developerInfos);
};

export default { create };