import createSectionRecord from "../db/sectionsQueries.js"

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

export async function changePageSection(res,req){
    const sectionId = req.body.sectionId;
    const pageId = req.params.pageId;

    console.log(sectionId, pageId, ": sectionId and pageId");
    
}

export async function deleteSection(res,req){
    
}