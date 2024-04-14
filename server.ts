import app from "./src/app";
import { config } from "./src/config/configs";
import connectDB from "./src/config/db";

const runServer = async () => {
    await connectDB()
    const PORT = config.port || 5000
    app.listen(PORT, () => {
        console.log(`Running on: localhost:${PORT}`);
    });
}

runServer();
