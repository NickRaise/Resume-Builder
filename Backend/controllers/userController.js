import User from "../models/user.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send("User already exists");
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await User({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("Created");
    } catch (e) {
        res.send(e);
    }
};


export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    const userData = await User.findOne({email});
    if(userData) {
        const matched = await bcrypt.compare(password, userData.password)
        if(!matched) return res.send("Invalid email or password")
    }
    else {
        return res.send("Invalid email or password")
    }


    res.send("login successful")
}
