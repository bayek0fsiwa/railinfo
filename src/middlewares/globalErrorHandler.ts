import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/configs";

const globalErrrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        message: err.message,
        errorStack: config.env === "dev" ? err.stack : "",
    })
}

export default globalErrrorHandler;
