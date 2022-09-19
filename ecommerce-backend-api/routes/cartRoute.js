const Cart = require("../models/Cart");
const { verifyJWT, verifyJWTAuthorization, verifyJWTAdmin } = require("./verifyJWT");

const router = require("express").Router();

// Create route
router.post("/", verifyJWT, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})


// Update route
router.put("/:id", verifyJWTAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Delete route
router.delete("/:id", verifyJWTAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted!")
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get User Cart route
router.get("/find/:userId", verifyJWTAuthorization, async (req, res) => {
    try {
        const CartFound = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(CartFound);

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all Carts route
router.get("/find", verifyJWTAdmin, async (req, res) => {
    try {
        const cartsFound = await Cart.find();
        res.status(200).json(cartsFound);

    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;
