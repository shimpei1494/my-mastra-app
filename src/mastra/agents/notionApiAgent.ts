import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { notionApiMcp } from "../tools";
// import { Memory } from "@mastra/memory";

// メモリを使用する場合は以下を有効にする
// const memory = new Memory();

export const notionApiAgent = new Agent({
    name: "Notion API Assistant",
    instructions: "You help users with Notion API tasks",
    model: openai("gpt-4.1-mini"),
    tools: await notionApiMcp.getTools(),
    // memory: memory,
  });