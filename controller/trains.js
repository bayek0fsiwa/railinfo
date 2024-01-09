import 'dotenv/config'

const baseURL = process.env.TRAINS_URL

export default async function getTrains() {
    const data = await fetch(baseURL, {
        "headers": { "accept": "application/json, text/javascrip" },
    });
    const result = await data.json();
    return result;
}
