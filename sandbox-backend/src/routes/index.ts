import { Router } from "express";
import ImageRouter from "./Images";
import DocumentRouter from "./Documents";
import AudioRouter from "./Audio";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/images", ImageRouter);
router.use("/documents", DocumentRouter);
router.use("/audio", AudioRouter);

// Export the base-router
export default router;
