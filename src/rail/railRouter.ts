import express from "express";
import { getPnr, getStations, getTrains } from "./railController";

const railRouter = express.Router();

railRouter.get("/stations", getStations).get("/trains", getTrains).get("/pnr/:pnrNumber", getPnr)


export default railRouter;
