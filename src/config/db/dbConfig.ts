import mongoose, { connection } from "mongoose";


export const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const mongoConnection = mongoose.connection;
        connection.on('connected', () => {
            console.log("COnnected to mongo db successsulyy...");
        });
        connection.on('error', () => {
            console.log(" Not connected to mongo ...");
        })
    } catch (error) {
        console.log("Something went wrong....");
        console.log(error);
    }
}
