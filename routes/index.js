import getPnrDetails from "../controller/pnr.js";
import getStations from "../controller/stations.js";
import getTrains from "../controller/trains.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    return res.send("Hello 😊, Try with these parameters 👉 trains, stations, pnr/pnrnumber")
})

router.get("/trains", async (req, res) => {
    const data = await getTrains()
    return res.json(data);
});


router.get("/stations", async (req, res) => {
    const data = await getStations()
    return res.json(data);
});


router.get("/pnr/:pnr", async (req, res) => {
    let pnr = req.params.pnr
    const data = await getPnrDetails(pnr)
    return res.json(data);
});

export default router;

// 2306899906
