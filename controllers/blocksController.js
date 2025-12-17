import db from "../db/blocksQueries.js";

async function deleteBlock(req, res) {
    const id = +req.params.blockId;
    console.log("Block deletion request received on block ID:" + id);
    const result = await db.deleteBlock(id);
    console.log("Deleted block:");
    console.log(result);
    res.send(result);
}

export default { deleteBlock };
