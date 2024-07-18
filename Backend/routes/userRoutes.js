import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const Router = express.Router();

Router.post("/register", registerUser);
Router.post("/login", loginUser);
Router.get("/", (req, res) => res.json({"my field": "good"}))

export default Router;
