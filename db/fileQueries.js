import { prisma } from "../lib/prisma.js";

async function addFolder(folderName) {
    const result = await prisma.folder.create({
        data: { title: folderName },
    });
}

async function getFolders() {
    const result = await prisma.folder.findMany({
        include: { files: true },
    });
    return result;
}

async function deleteFolder(id) {
    const result = await prisma.folder.delete({ where: { id: +id } });
}

async function updateFolder(id, value) {
    await prisma.folder.update({
        where: { id: +id },
        data: {
            title: value,
        },
    });
}

async function addFile({ title, url, filename, folderId }) {
    await prisma.file.create({
        data: {
            title: title,
            url: url,
            filename: filename,
            folderId: folderId,
        },
    });
}

async function deleteFile(id) {
    await prisma.file.delete({
        where: {
            id: id,
        },
    });
}

export default {
    addFolder,
    getFolders,
    deleteFolder,
    updateFolder,
    addFile,
    deleteFile,
};
