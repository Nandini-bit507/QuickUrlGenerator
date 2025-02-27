import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectToMongo from "./Database/Db.js";
import User from "./Database/models/User.js";
import  authRoute from "./Routes/authRoute.js";
import cors from "cors";
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}
const app = express();
connectToMongo();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,"public")))
app.set("views", path.join(__dirname, "Views"));
app.use("/auth",authRoute)
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port 127.0.0.1:${process.env.PORT}`);
});