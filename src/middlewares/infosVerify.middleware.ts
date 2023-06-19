import { NextFunction, Request, Response } from "express";
import { developerInfosResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

const verifyDeveloperInfosExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const query: developerInfosResult = await client.query(
        'SELECT * FROM "developerInfos" WHERE "developerId" = $1;',
        [req.params.id]
    );

    if (query.rowCount !== 0) {
        throw new AppError("Developer infos already exists.", 409);
    }

    return next();
};

export default verifyDeveloperInfosExists;