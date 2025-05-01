import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDb } from "./config/db.js";
// import Product from "./models/product.model.js"; // Import the Product model
// import mongoose from "mongoose";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use the PORT from environment variables or default to 5000

const __dirname = path.resolve(); // Get the current directory name

app.use(express.json()); // Middleware to parse JSON request body. Allows us to accept JSON data in the req.body

// app.get("/", (req, res) => {
//     res.send("Server is running!");
// });


// console.log(process.env.MONGO_URI);

app.use("/api/products", productRoutes); // Use the product routes defined in product.route.js

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the frontend dist directory

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); // Serve the index.html file for all other routes
    });
}


app.listen(PORT, () => {
    connectDb();
    console.log("Server started at http://localhost:" + PORT);
});
