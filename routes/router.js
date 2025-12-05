import { Router } from "express";
const router = Router();

import authController from "../controllers/authController.js";
import fileController from "../controllers/fileController.js";
import { validateSignup } from "../validators/authValidators.js";
import passport from "passport";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

router.post("/sign-up", [validateSignup, authController.addUser]);

router.post(
    "/log-in",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })
);

router.get("/log-out", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

router.get("/", async (req, res) => {
    res.render("index", { user: req.user });
});

router.get("/test", async (req, res) => {
    authController.testCrud();
    res.redirect("/");
});

router.post("/upload", upload.single("upload-file"), fileController.addFile);

router.get("/file-manager", async (req, res) => {
    const folders = await fileController.getFolders();
    res.render("file-manager", { folders: folders });
});

router.post("/addFolder", [fileController.addFolder]);

router.post("/file-manager/delete", fileController.deleteFolder);

router.post("/file-manager/update", fileController.updateFolder);

router.post("/file-manager/file/delete", fileController.deleteFile);

export default router;
