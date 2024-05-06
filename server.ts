import app from "./src/app";
import { config } from "./src/config/configs";
import connectDB from "./src/config/db";

const runServer = async () => {
    // await connectDB()
    const PORT = config.port || 8080
    app.listen(PORT, () => {
        console.log(`Running on: localhost:${PORT}`);
    });
}

runServer();
