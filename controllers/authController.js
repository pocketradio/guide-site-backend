import db from "../db/authQueries.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

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

async function testCrud(req, res) {
    const addUser = await db.addUser("GhidWard", "Password");
    const getUser = await db.getUser("GhidWard");
    const getUserById = await db.getUserById(1);
    console.log(getUserById);
}

export default { addUser, testCrud };
