import { NextFunction, Request, Response } from "express";
import { TPreferredOSType } from "../interfaces";
import AppError from "../errors";

const verifyOS = (req: Request, res: Response, next: NextFunction): void | Response => {
    const { preferredOS } = req.body;
    const validOS: TPreferredOSType[] = ["Windows", "Linux", "MacOS"];

    if (!preferredOS) {
        return next();
    }

    if (!validOS.includes(preferredOS)) {
        throw new AppError("Invalid OS option.", 404);
    }

    return next();
};

export default verifyOS;