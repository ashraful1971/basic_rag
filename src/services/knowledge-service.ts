import { getProfileCollection } from "@/config/chroma.js";
import { readFile } from "fs/promises";
import path from "path";

const collection = await getProfileCollection();

const addKnowledge = async (chunks: string[]) => {
    collection.add({
        ids: chunks.map((p, i) => `chunk-id-${i}`),
        documents: chunks,
    });

    return true;
};

const queryKnowledge = async (query: string) => {
    const results = collection.query({
        queryTexts: [query],
        nResults: 2
    });

    return results;
};

const initData = async () => {
    const filePath = path.join(import.meta.dirname, "..", "data", "info.txt");
    const data = await readFile(filePath, "utf-8")
    const paragraphs = data.split(/\n\s*\n/).filter((p: string) => p.trim().length > 0);

    const result = await addKnowledge(paragraphs)

    if(result) {
        console.log("Database seeded!");
    }
}

export {addKnowledge, queryKnowledge, initData}