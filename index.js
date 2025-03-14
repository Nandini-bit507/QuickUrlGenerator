import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectToMongo from "./Database/Db.js";
import  authRoute from "./Routes/authRoute.js";
import contactroute from "./Routes/contactroute.js";
import profileroute from "./Routes/profileroute.js";
import urlroute from "./Routes/urlroute.js";
import qrRoute from "./Routes/qrRoute.js"
import analyticsRoute from "./Routes/analyticsRoute.js"
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
app.use("/",qrRoute)
app.use("/",contactroute)
app.use("/",profileroute)
app.use("/",urlroute)
app.use("/",analyticsRoute)
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/page/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/page/aboutus", (req, res) => {
  res.render("aboutus");
});
app.get("/page/features", (req, res) => {
  res.render("features");
});
app.get("/page/profile", (req, res) => {
  res.render("profile");
});
app.get("/page/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/page/login", (req, res) => {
  res.render("login");
});
app.get("/page/register", (req, res) => {
  res.render("register");
});
app.get("/page/privacypolicy", (req, res) => {
  res.render("privacypolicy");
});
app.get("/page/footer", (req, res) => {
  res.render("footer");
});
app.get("/page/terms&conditions", (req, res) => {
  res.render("terms&conditions");
});
app.get("/page/faq", (req, res) => {
  res.render("faq");
});
app.get("/page/url", (req, res) => {
  res.render("url.ejs");
});
app.get("/page/analytics", (req, res) => {
  res.render("analytics.ejs");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port 127.0.0.1:${process.env.PORT}`);
});