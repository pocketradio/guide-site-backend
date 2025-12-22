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
    const result = await db.createPage(title, 1);
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

async function getPage(req, res) {
    console.log("Received page get request");
    const pageId = +req.params.pageId;
    const page = await db.getPage(pageId);
    const blocks = await db.getPageBlocks(pageId);
    res.send({ page, blocks });
}

async function createBlockForPage(req, res) {
    console.log("Received block creation request");
    const pageId = +req.params.pageId;
    const order = +req.body.order;
    const result = await db.createBlockForPage(pageId, order);
    console.log(result);
    res.send(result);
}

async function updateBlocksForPage(req, res) {
    const pageId = +req.params.pageId;
    const updateType = req.body.type;
    const order = +req.body.order;
    console.log("Received request to update blocks for page " + pageId);
    console.log(updateType);
    let result;
    if (updateType == "offset") {
        result = await offsetBlockOrderForPage(pageId, order);
    }
    res.send(result);
}

async function offsetBlockOrderForPage(pageId, order) {
    const result = await db.offsetBlockOrderForPage(pageId, order);
}

export default {
    getPages,
    getPage,
    postPage,
    deletePage,
    updatePage,
    createBlockForPage,
    updateBlocksForPage,
};
