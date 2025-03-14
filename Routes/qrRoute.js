import express from "express";
import generateQR  from "../Controllers/qrcontroller.js";

const router = express.Router();

router.post("/api/qr/", generateQR);

export default router;