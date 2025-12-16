import pagesController from "../controllers/pagesController.js";

import { Router } from "express";
const router = Router();

router.get("/", pagesController.getPages);
router.post("/", pagesController.postPage);
router.delete("/:pageId", pagesController.deletePage);
router.put("/:pageId", pagesController.updatePage);

export default router;
