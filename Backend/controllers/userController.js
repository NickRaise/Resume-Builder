import User from "../models/user.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await User({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("Created");
        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await User.findOne({ email });
        if (userData) {
            const matched = await bcrypt.compare(password, userData.password);
            if (!matched)
                return res
                    .status(400)
                    .json({ message: "Invalid email or password" });
        } else {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: userData._id }, process.env.JWT_SECRET, {
            expiresIn: "48h",
        });

        res.json({ token });

        console.log("login successful");
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
