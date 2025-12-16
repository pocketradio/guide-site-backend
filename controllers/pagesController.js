import { title } from "process";
import db from "../db/pagesQueries.js";

async function getPages(req, res) {
    console.log("pages request received");
    const result = await db.getPages();
    res.send(result);
}

async function postPage(req, res) {
    const title = req.body.title;

    console.log("Page POST request received");
    const exists = await db.checkPagesForTitle(title);
    if (exists) {
        console.log("Page already exists");
        res.status(400).send({ error: "Page already exists" });
        return;
    }
    const result = await db.createPage(title);
    res.send(result);
}

async function deletePage(req, res) {
    const id = +req.params.pageId;
    const exists = await db.checkPageById(id);
    if (!exists) {
        console.log("Error: couldn't find page with id " + id);
        res.end();
        return;
    }

    const result = await db.deletePageById(id);
    console.log(result);
    res.send(result);
    return;
}

async function updatePage(req, res) {
    console.log("Received edit request");
    const id = +req.params.pageId;
    const title = req.body.title;
    const result = await db.updatePage({ id, title });
    console.log(result);
    res.send(result);
}

export default {
    getPages,
    postPage,
    deletePage,
    updatePage,
};
