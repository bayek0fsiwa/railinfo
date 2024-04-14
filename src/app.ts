import express, { NextFunction, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "Hello!"});
})


export default app;
