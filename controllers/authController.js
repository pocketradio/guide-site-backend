import db from "../db/authQueries.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import passport from "passport";

async function addUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const hashed_password = await bcrypt.hash(password, 10);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("index", {
            errors: errors.array(),
            username: username,
            password: password,
        });
    }

    const userExists = await db.checkUserExists(username);
    if (userExists) {
        return res.status(400).render("index", {
            errors: [{ msg: "Account already exists" }],
            username: username,
            password: password,
        });
    }

    db.addUser(username, hashed_password);
    res.redirect("/");
}

async function logout(req, res) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}

async function login(req, res) {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    });
}

export default { addUser, logout, login };
