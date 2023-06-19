import { NextFunction, Request, Response } from "express";
import { developerResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.body;

    if (!email) {
        return next();
    }

    const query: developerResult = await client.query(
        'SELECT * FROM "developers" WHERE "email" = $1;',
        [email]
    );

    if (query.rowCount != 0) {
        throw new AppError("Email already exists.", 409);
    }

    return next();
};

export default verifyEmail;