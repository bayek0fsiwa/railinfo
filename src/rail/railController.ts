import { Request, Response } from "express";
import { config } from "../config/configs";

export async function getStations(req: Request, res: Response) {
    try {
        const stationsUrl = config.stationsUrl;
        const response = await fetch(stationsUrl as string, {
            method: "GET",
            // headers: { "accept": "application/json" },
        });
        const result = await response.json();
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error)
    }
}

export async function getTrains(req: Request, res: Response) {
    try {
        const trainsUrl = config.trainsUrl;
        const response = await fetch(trainsUrl as string, {
            method: "GET",
            // headers: { "accept": "application/json" },
        });
        const result = await response.json();
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error)
    }
}

export async function getPnr(req: Request, res: Response) {
    try {
        const pnrNumber = req.params["pnrNumber"];
        const pnrUrl = config.pnrUrl;
        const response = await fetch(`${pnrUrl}/${pnrNumber}` as string, {
            method: "GET",
            // headers: { "accept": "application/json" },
        });
        const result = await response.json();
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error)
    }
}
