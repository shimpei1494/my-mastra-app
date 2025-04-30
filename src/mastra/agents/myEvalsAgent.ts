import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { SummarizationMetric } from "@mastra/evals/llm";
import {
    ContentSimilarityMetric,
    ToneConsistencyMetric,
} from "@mastra/evals/nlp";

const model = openai("gpt-4.1-mini");

export const myEvalsAgent = new Agent({
    name: "ContentWriter",
    instructions: "You are a content writer that creates accurate summaries",
    model,
    evals: {
        summarization: new SummarizationMetric(model),
        contentSimilarity: new ContentSimilarityMetric(),
        tone: new ToneConsistencyMetric(),
    },
});