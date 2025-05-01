// This file is responsible for connecting to the MongoDB database using Mongoose.
// It exports a function that establishes the connection and logs the status to the console.

import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
       console.error(`Error: ${error.message}`); 
       process.exit(1); // process code 1 means Exit the process with failure, 0 means success
    }
}