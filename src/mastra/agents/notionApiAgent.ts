import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { notionApiMcp } from "../tools";
import { Memory } from "@mastra/memory";

// メモリを使用する場合は以下を有効にする
const memory = new Memory();

const instructions = "あなたはNotion APIを使用して、ユーザーに要望を叶えます。もしページの作成を依頼された場合は、IDが`1f95d214-ac65-80a6-800e-f6dd6bf774b1`のページに作成して。";

export const notionApiAgent = new Agent({
    name: "Notion API Assistant",
    instructions: instructions,
    model: openai("gpt-4.1-mini"),
    tools: await notionApiMcp.getTools(),
    memory: memory,
  });