import {ChromaClient} from "chromadb";

const client = new ChromaClient();

const getProfileCollection = async () => {
    return await client.getOrCreateCollection({name: "knowledge"});
}

export {client, getProfileCollection};