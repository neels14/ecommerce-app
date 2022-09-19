const Product = require("../models/Product");
const { verifyJWT, verifyJWTAuthorization, verifyJWTAdmin } = require("./verifyJWT");

const router = require("express").Router();

// Create route
router.post("/", verifyJWTAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
})


// Update route
router.put("/:id", verifyJWTAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Delete route
router.delete("/:id", verifyJWTAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted!")
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get single Product route
router.get("/find/:id", async (req, res) => {
    try {
        const ProductFound = await Product.findById(req.params.id)
        res.status(200).json(ProductFound);

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all Products route
router.get("/find/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let productsArr;

        if (qNew) {
            productsArr = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            productsArr = await Product.find({
                categories: {
                    $in: [qCategory],
                }
            });
        } else {
            productsArr = await Product.find();
        }


        res.status(200).json(productsArr);

    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;
