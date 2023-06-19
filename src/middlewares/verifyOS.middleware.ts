import { NextFunction, Request, Response } from "express";
import { TPreferredOSType } from "../interfaces";

const verifyOS = (req: Request, res: Response, next: NextFunction): void | Response => {
    const { operationalSystem } = req.body;
    const validOS: TPreferredOSType[] = ["Windows", "Linux", "MacOS"];

    if (!operationalSystem) {
        return next();
    }

    if (!validOS.includes(operationalSystem)) {
        return res.status(400).json({ error: "Invalid OS option." });
    }

    return next();
};

export default verifyOS;