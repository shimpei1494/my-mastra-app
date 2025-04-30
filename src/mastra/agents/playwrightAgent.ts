import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { playwrightMcp } from "../tools";
import { Memory } from "@mastra/memory";

// メモリを使用する場合は以下を有効にする
const memory = new Memory();

export const playwrightAgent = new Agent({
    name: "Playwright Assistant",
    instructions: "You help users with Playwright tasks",
    model: openai("gpt-4.1-mini"),
    tools: await playwrightMcp.getTools(),
    memory: memory,
  });