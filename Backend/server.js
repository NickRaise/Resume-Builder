import express from "express";
import mongoose from "mongoose";
const app = express();
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js"

const port = process.env.PORT;

// console.log(process.env.main)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/Resume-Builder");
    console.log("Connected to the database");
}

connectDB().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port 3000`);
});
