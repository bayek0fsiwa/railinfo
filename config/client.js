import { Redis } from "ioredis";

export default client = new Redis();


// import client from "./config/client.js";

// Redis
// async function init() {
//     await client.set("msg", "Hello");
//     await client.expire("msg", 10)
//     const result = await client.get("msg");
//     console.log(result);
// }

// init();
