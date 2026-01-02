const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = async (req, res, next) => {
    try{
        const token = req.cookies?.token || req.body?.token || req.header("Authorization")?.replace("Bearer ", "");

        if(!token) {
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }
        catch(err) {
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong while validating the token"
        });
    }
}

exports.isStudent = async (req, res, next) => {
    try{
        if(req.user.role != "Student") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Students"
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified, Please try again later"
        });
    }
}

exports.isInstructor = async (req, res, next) => {
    try{
        if(req.user.role != "Instructor") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructors"
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified, Please try again later"
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    try{
        if(req.user.role != "Admin") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admins"
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified, Please try again later"
        })
    }
}