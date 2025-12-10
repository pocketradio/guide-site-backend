import { prisma } from "../lib/prisma.js";

async function getGames() {
    return await prisma.game.findMany();
}

async function createGame(title) {
    return await prisma.game.create({
        data: {
            title,
        },
    });
}

async function getChecklists(gameId) {
    return await prisma.checklist.findMany({
        where: {
            gameId,
        },
    });
}

async function createChecklist(title, gameId) {
    return await prisma.checklist.create({
        data: {
            title,
            gameId,
        },
    });
}

async function getChecklistItems(checklistId) {
    return await prisma.checklistItem.findMany({
        where: {
            checklistId,
        },
    });
}

async function createChecklistItem(title, checklistId) {
    return await prisma.checklistItem.create({
        data: {
            checklistId,
            title,
        },
    });
}

async function updateChecklistItem({ itemId, title, imageOne, imageTwo } = {}) {
    return await prisma.checklistItem.update({
        where: {
            id: itemId,
        },
        data: {
            title,
            imageOne,
            imageTwo,
        },
    });
}

export default {
    getGames,
    createGame,
    createChecklist,
    getChecklists,
    getChecklistItems,
    createChecklistItem,
    updateChecklistItem,
};
