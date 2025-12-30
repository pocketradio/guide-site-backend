import { prisma } from "../lib/prisma.js";

async function getBlock(id) {
    return await prisma.block.findUnique({
        where: { id },
        include: {
            files: true,
        },
    });
}

async function deleteBlock(id) {
    return await prisma.block.delete({
        where: {
            id,
        },
    });
}

async function updateBlock({ id, content, content2 }) {
    return await prisma.block.update({
        where: {
            id,
        },
        data: {
            content: {
                type: "richText",
                content,
                content2,
            },
        },
    });
}

export default { deleteBlock, updateBlock, getBlock };
