const { User } = require("../model/UserModel");
const data = require("../utils/datafile");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.getUser = async (req, res) => {
    try {
        const decodedValue = jwt.verify(req.query.token, process.env.SECRET_KEY);
        if(!decodedValue) {
            res.status(401).json({
                status: false,
                message: 'No Token'
            })
        }
        const users = await User.findOne({where: {id: decodedValue.user_id}});
        console.log(users)
        res.status(201).json({
            status: true,
            data: users
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}
exports.storeUser = async (req, res) => {
    try {
        const data = req.body
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const isPresent = await checkUser(data);
        const isUsed = await checkName(data);
        console.log('Daata0', isPresent);

        if(isPresent) {
            res.status(400).json({
                status: false,
                message: "User already present",
                })
        } else if(isUsed) {
            res.status(400).json({
                status: false,
                message: "Username already used",
                })
        }
        
        else {
            const saveUser = await User.create({
                full_name: data.full_name,
                username: data.username,
                email: data.email,
                password: hashedPassword
            });
            res.status(201).json({
                status: true,
                message: "User Created Successfully",
            });
        }

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    const data = req.body
    try {
        const user = await User.findOne({where: { username: data.username}})
        if(!user){
            res.status(400).json({
                status: false,
                message: "You are not registered, please register",
                })
        }
        const comparePassword = await bcrypt.compare(data.password, user.password);
        if(!comparePassword){
           return res.status(400).json({
                status: false,
                message: "Incorrect password",
                });
        }
        const token = jwt.sign({user_id: user.id}, process.env.SECRET_KEY, {expiresIn: process.env.JWTEXPIRE});
        console.log('JWT TOKEN: ', token)
        res.status(200).json({
            status: true,
            message: "Login Successful",
            token: token
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
    
}

const checkUser = async (data) => {
    const user = await User.findOne({where: { email: data.email}, raw: true});
    return user;
}
const checkName = async (data) => {
    const user = await User.findOne({where: { username: data.username}, raw: true});
    return user;
}

