import { Ollama } from "ollama";

const llm = new Ollama();

export const getAnswer = async (question: string, context: string) => {
    const prompt = `
        <context>
        ${context}
        </context>

        <instruction>
        Answer the user's question using ONLY the information in the <context> tags above. 
        If the answer is not present, you must respond with exactly "I don't know." and nothing else.
        Do not explain your reasoning. Do not provide a polite introduction.
        </instruction>

        <question>
        ${question}
        </question>
    `;
    
    const result = await llm.generate({
        model: "granite3-dense:2b",
        prompt
    })

    return result.response;
};