import { prisma } from "../lib/prisma.js"

export default async function createSectionRecord(title, gameId){

    return await prisma.section.create({
        data:{
            title,
            gameId
        }
    })
}

export async function getGameWithSectionId(sectionId){
    return await prisma.section.findUnique({
        where:{
            id : sectionId
        },
        select:{
            gameId : true
        }
    })
}


export async function deleteSectionRecord(id){
    return await prisma.section.delete({
        where:{
            id
        }
    })
}