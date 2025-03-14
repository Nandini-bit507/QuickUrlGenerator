import express from "express";
import { getAnalytics } from "../Controllers/analyticscontroller.js";

// import authMiddleware from "../middlewares/middleware.js"
const router = express.Router();

router.get("/api/analyze/:shortUrlId", getAnalytics);
router.get("/page/analyze/:shortURLId", (req, res) => {
  res.render("analytics.ejs", { shortUrl: req.params.shortURLId });
});

export default router;