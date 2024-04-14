import mongoose from "mongoose";
import { config } from "./configs";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.info("Conneced to DB");
        })

        mongoose.connection.on("error", (err: any) => {
            console.error("something went wrong", err);
        })

        await mongoose.connect(config.databaseUrl as string);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;
