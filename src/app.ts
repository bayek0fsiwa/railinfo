import express, { NextFunction, Request, Response } from "express";
import globalErrrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Hello!" });
})

app.use("/api/users", userRouter)
app.use(globalErrrorHandler);

export default app;