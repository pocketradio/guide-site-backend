import { prisma } from "../lib/prisma.js";
import { check } from "express-validator";

async function addUser(username, password) {
    const exists = await prisma.user.findFirst({
        where: {
            username: username,
        },
    });
    if (exists) return;
    const result = await prisma.user.create({
        data: {
            password: password,
            username: username,
        },
    });
    return result;
}

async function getUser(username) {
    const result = await prisma.user.findMany({
        where: {
            username: username,
        },
    });
    if (result.length > 1 || result.length == 0) return false;
    return result[0];
}

async function checkUserExists(username) {
    const result = await prisma.user.findMany({
        where: { username: username },
    });
    return result.length > 0;
}

async function getUserById(id) {
    const result = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    return result;
}

export default {
    addUser,
    getUser,
    getUserById,
    checkUserExists,
};
