const Order = require("../models/Order");
const { verifyJWT, verifyJWTAuthorization, verifyJWTAdmin } = require("./verifyJWT");

const router = require("express").Router();

// Create route
router.post("/", verifyJWT, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
})


// Update route
router.put("/:id", verifyJWTAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Delete route
router.delete("/:id", verifyJWTAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted!")
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get User Orders route
router.get("/find/:userId", verifyJWTAuthorization, async (req, res) => {
    try {
        const OrdersFound = await Order.find({ userId: req.params.userId });
        res.status(200).json(OrdersFound);

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all Orders route
router.get("/find", verifyJWTAdmin, async (req, res) => {
    try {
        const OrdersFound = await Order.find();
        res.status(200).json(OrdersFound);

    } catch (err) {
        res.status(500).json(err);
    }
})

// Get monthly income
router.get("/income", verifyJWTAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                }
            }
        ]);

        res.status(200).json(income);

    } catch (err) {
        res.status(500).json(err);

    }
})


module.exports = router;
