const User = require("../models/User");
const { verifyJWT, verifyJWTAuthorization, verifyJWTAdmin } = require("./verifyJWT");

const router = require("express").Router();

// Update route
router.put("/:id", verifyJWTAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECKEY
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }

})

// Delete route
router.delete("/:id", verifyJWTAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted!")
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get single user route
router.get("/find/:id", verifyJWTAdmin, async (req, res) => {
    try {
        const userFound = await User.findById(req.params.id)
        const { password, ...others } = userFound._doc;
        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all users route
router.get("/find", verifyJWTAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const usersFound = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();

        res.status(200).json(usersFound);

    } catch (err) {
        res.status(500).json(err)
    }
})


// Get user stats route
router.get("/stats", verifyJWTAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ]);

        res.status(200).json(data);

    } catch (err) {
        res.status(500).json(err);

    }
})

module.exports = router;
