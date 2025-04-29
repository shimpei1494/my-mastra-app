
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { notionApiAgent } from './agents/notionApiAgent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, notionApiAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
