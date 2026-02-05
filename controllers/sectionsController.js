import createSectionRecord, { deleteSectionRecord } from "../db/sectionsQueries.js"

export default async function createSection(req, res){
    const {title, gameId} = req.body;
    console.log(title, gameId, "is the section data");
    
    if (!title || !gameId) {
        return res.status(400).send({ error: "Title and gameId are required" });
    }

    try {
        const result = await createSectionRecord(title, gameId);
        res.status(201).send(result);
    } catch (error) {
        console.error("Error creating section:", error);
        res.status(500).send({ error: "Failed to create section" });
    }
}

export async function changePageSection(req,res){
    const sectionId = req.body.sectionId;
    const pageId = req.params.pageId;

    console.log(sectionId, pageId, ": sectionId and pageId");
    
}

export async function deleteSection(req,res){
    const sectionId = Number(req.params.id);
    console.log(sectionId, 'is the ID to be deleted');
    try {
        const res = await deleteSectionRecord(sectionId);
        res.status(201).send(res);
    }
    catch(e){
        console.error("Error deleting the section record : ", e);
        res.status(500).send({error : "failed to deleted section"})
    }
}