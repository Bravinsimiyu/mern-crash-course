import express from "express";
// import mongoose from "mongoose";
// import Product from "../models/product.model.js"; // Import the Product model
import { createProduct, deleteProduct, getProducts, updateProduct } from "../contollers/product.controller.js";

const router = express.Router();

router.get("/", getProducts); // Get all products


router.post("/", createProduct); // Create a new product

router.put("/:id", updateProduct); // Update a product by ID

router.delete("/:id", deleteProduct); // Delete a product by ID


export default router;