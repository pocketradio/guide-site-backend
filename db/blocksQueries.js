import { prisma } from "../lib/prisma.js";

async function deleteBlock(id) {
    return await prisma.block.delete({
        where: {
            id,
        },
    });
}

export default { deleteBlock };
