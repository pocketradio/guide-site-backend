import { prisma } from "../lib/prisma.js";

async function getGames() {
    return await prisma.game.findMany();
}

export default { getGames };
