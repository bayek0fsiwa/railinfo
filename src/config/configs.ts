import { config as conf } from "dotenv";


conf();

const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGO_CONNECTION_STRING,
    env: process.env.NODE_ENV,
    stationsUrl: process.env.STATIONS_URL,
    trainsUrl: process.env.TRAINS_URL,
    pnrUrl: process.env.PNR_URL,
}

export const config = Object.freeze(_config)
