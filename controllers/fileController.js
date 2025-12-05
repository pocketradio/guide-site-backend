import db from "../db/fileQueries.js";
import fs from "fs/promises";

async function addFolder(req, res) {
    await db.addFolder(req.body.folderName);
    res.redirect("file-manager");
}

async function getFolders(req, res) {
    const folders = await db.getFolders();
    console.log("\nLoading folders");
    folders.map((folder) => {
        console.log("\n" + folder.title);
        if (folder.files.length > 0) {
            folder.files.map((file) => console.log(file));
        } else {
            console.log("No files in folder");
        }
    });
    return folders;
}

async function deleteFolder(req, res) {
    await db.deleteFolder(req.body.id);
    res.redirect("/file-manager");
}

async function updateFolder(req, res) {
    await db.updateFolder(req.body.id, req.body.title);
    res.redirect("/file-manager");
}

async function addFile(req, res) {
    await db.addFile({
        title: req.file.originalname,
        url: req.file.path,
        filename: req.file.filename,
        folderId: +req.body.id,
    });

    console.log("\nUploading File");
    console.log("Folder ID: " + req.body.id);
    console.log(req.file);
    res.redirect("/file-manager");
}

async function deleteFile(req, res) {
    console.log(req.body.url);
    await fs.unlink(req.body.url);
    await db.deleteFile(+req.body.id);
    res.redirect("/file-manager");
}

export default {
    addFolder,
    getFolders,
    deleteFolder,
    updateFolder,
    addFile,
    deleteFile,
};
