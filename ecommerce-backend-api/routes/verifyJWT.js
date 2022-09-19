const jwt = require("jsonwebtoken")

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECKEY, (err, user) => {
            if (err) res.status(403).json("User access token is not valid!")
            req.user = user;
            next();
        })
    } else {
        res.status(401).json("User not authenitcated!")
    }
}

const verifyJWTAuthorization = (req, res, next) => {
    verifyJWT(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("User is not authorized for this action!")
        }
    })
}

const verifyJWTAdmin = (req, res, next) => {
    verifyJWT(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("User is not authorized for this action! Admin access needed!")
        }
    })
}

module.exports = { verifyJWT, verifyJWTAuthorization, verifyJWTAdmin };