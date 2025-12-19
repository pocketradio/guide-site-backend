import pagesController from "../controllers/pagesController.js";

import { Router } from "express";
const router = Router();

// route is "/pages"
router.get("/", pagesController.getPages);
router.post("/", pagesController.postPage);
router.get("/:pageId", pagesController.getPage);
router.delete("/:pageId", pagesController.deletePage);
router.put("/:pageId", pagesController.updatePage);
router.post("/:pageId/blocks", pagesController.createBlockForPage);
router.put("/:pageId/blocks", pagesController.updateBlocksForPage);

export default router;
