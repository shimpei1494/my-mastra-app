import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { openai } from "@ai-sdk/openai";

// 基本的なメモリのセットアップ
const memory = new Memory();

export const myMemoryAgent = new Agent({
    name: "MyMemoryAgent",
    instructions: "あなたはメモリを持つ役立つアシスタントです。",
    model: openai("gpt-4.1-mini"),
    memory: memory, // メモリインスタンスを接続
});