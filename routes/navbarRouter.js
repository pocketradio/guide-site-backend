import { Router } from "express";
import { updateNavbarData } from "../db/navbarQueries.js";
import { getMapDataFromDB } from "../controllers/navbarController.js";

const router = Router();

router.get("/", getMapDataFromDB);

export default router;