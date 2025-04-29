
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent, notionApiAgent, myMemoryAgent } from './agents';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, notionApiAgent, myMemoryAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
