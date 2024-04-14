import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import apicache from "apicache";
import 'dotenv/config';
import router from "./routes/index.js";


const PORT = process.env.PORT || 5000
const app = express();


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 5,
});

let cache = apicache.middleware; // cache("2 minutes")

app.use(cors())
app.use(limiter);
app.set("trust proxy", 1)

app.use("/", router)


app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});
