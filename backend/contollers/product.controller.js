import mongoose from "mongoose"; // Import mongoose for ObjectId validation
import Product from "../models/product.model.js"; // Import the Product model


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Find all products in the database
        res.status(200).json({ success: true, data: products }); // Send the products as a JSON response
    } catch (error) {
        console.log("erros in fetching products:", error.message)
        res.status(500).json({ success: false, message: "Server error"}); // Handle any errors that occur during the database query        
    }

}

export const createProduct = async (req, res) => {
    const product = req.body; //user will send the product data in the request body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }

    const newProduct = new Product(product); //create a new product instance

    try {
        await newProduct.save(); //save the product to the database
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.error("Error in Create Product:", error.message)
      res.status(500).json({ success: false, message: "Server error" })
    }

}

export const updateProduct = async (req, res) => {
    const { id } = req.params //get the id from the request parameters

    const product =  req.body; //user will send the product data in the request body

    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success: false, message: "Invalid product ID" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); //find the product by id and update it
        res.status(200).json({ success: true, data: updatedProduct }); //send the updated product as a JSON response
    } catch (error) {
        // console.log("Error in Update Product:", error.message) //log the error message to the console
        res.status(500).json({ success: false, message: "Server Error" }) //handle any errors that occur during the database query
    }


}

export const deleteProduct = async (req, res) => {
    const { id } = req.params; //get the id from the request parameters
    // console.log("id:", id)

    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success: false, message: "Invalid product ID" });
    }

    try {
        await Product.findByIdAndDelete(id); //find the product by id and delete it
        res.status(200).json({ success: true, message: "Product deleted successfully"})
    } catch (error) {
        console.log("Error in Delete Product:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}