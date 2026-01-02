const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;

        if(!name || !email || !password || !role) {
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({name:name, email:email, role:role, password:hashedPassword});

        user.password = undefined;

        return res.status(200).json({
            success:true,
            message:"Signed Up Successfully",
            user
        });

    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error Occured While signing up"
        });
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:"Please fill all the required fields"
            });
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

        const payload = {
            id: user._id,
            role: user.role,
            email: user.email
        }

        if(await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            );

            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged In successfully"
            })
        }
        else{
            return res.status(500).json({
                success:false,
                message:'Login failure please try again'
            });
        }
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error while logging in"
        });
    }
}