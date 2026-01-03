import { initData, queryKnowledge } from "@/services/knowledge-service.js";
import { getAnswer } from "@/services/llm-service.js";

const startChat = async () => {
    console.log("Type 'exit' to quit. \n");
    
    console.log("Question: ");
    process.stdin.on("data", async (data) => {
        const input = data.toString().trim();

        if(input.length === 0){
            return;
        };
        
        if (input === "exit"){
            process.exit();
        }

        const result = await queryKnowledge(input);
        const context = result.documents?.[0]?.join("\n");

        if(!context){
            console.log("I don't know.");
        } else {
            const ans = await getAnswer(input, context);
            console.log("Answer: \n", ans);
        }

        console.log("Question: ")
    });
};

initData().then(startChat);