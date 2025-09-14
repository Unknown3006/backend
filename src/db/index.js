import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    console.log(process.env.PORT); // Should show 8000
    console.log(process.env.MONGODB_URI); // Should show MongoDB connection string
    console.log('Connection string:', `${process.env.MONGODB_URI}/${DB_NAME}`);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTION DONE DB_HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error in Connection in DB:", error);
        process.exit(1);
    }
}

export default connectDB