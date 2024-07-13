import express from "express";
import mongoose from "mongoose";
const app = express();
import "dotenv/config";
import { registerUser, loginUser } from "./controllers/userController.js";

// console.log(process.env.main)
app.use(express.json());
// app.use(express.urlencoded());

async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/Resume-Builder");
    console.log("Connected to the database");
}

connectDB().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/register", registerUser);
app.post("/login", loginUser);

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
