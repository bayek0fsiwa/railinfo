import 'dotenv/config'

const baseURL = process.env.STATIONS_URL

export default async function getStations() {
    const data = await fetch(baseURL, {
        "headers": { "accept": "application/json, text/javascrip" },
    });
    const result = await data.json();
    return result;
}
