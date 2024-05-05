import express, { NextFunction, Request, Response } from "express";
// import cors from "cors";
import globalErrrorHandler from "./middlewares/globalErrorHandler";
import railRouter from "./rail/railRouter";

const app = express();
// app.use(cors<Request>());


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Hello!" });
})

app.use("/api/rail", railRouter)
app.use(globalErrrorHandler);

export default app;
