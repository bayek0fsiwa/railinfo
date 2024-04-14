import express, { Request, Response } from "express";

const userRouter = express.Router();


userRouter.post("/register", (req: Request, res: Response) => {
    res.status(200).json({ message: "OK" });
})


userRouter.post("/login", (req: Request, res: Response) => {
    res.status(200).json({ message: "OK" });
})


export default userRouter;