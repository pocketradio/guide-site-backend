import requireAdmin from "../config/requireAdmin.js";
import createSection from "../controllers/sectionsController.js";
import { deleteSection } from "../controllers/sectionsController.js";
import { Router } from "express";
const router = Router();

router.post("/", requireAdmin, createSection)
router.delete("/delete/:id", requireAdmin, deleteSection)

export default router;