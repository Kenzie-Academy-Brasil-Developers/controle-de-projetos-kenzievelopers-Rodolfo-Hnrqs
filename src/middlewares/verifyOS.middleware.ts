import { NextFunction, Request, Response } from "express";
import { TPreferredOSType } from "../interfaces";

const verifyOS = (req: Request, res: Response, next: NextFunction): void | Response => {
    const { preferredOS } = req.body;
    const validOS: TPreferredOSType[] = ["Windows", "Linux", "MacOS"];

    if (!preferredOS) {
        return next();
    }

    if (!validOS.includes(preferredOS)) {
        return res.status(400).json({ error: "Invalid OS option." });
    }

    return next();
};

export default verifyOS;