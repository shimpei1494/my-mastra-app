import { MCPConfiguration } from "@mastra/mcp";

export const playwrightMcp = new MCPConfiguration({
  servers: {
    playwright: {
      command: "npx",
      args: ["-y", "@playwright/mcp@latest"],
    },
  },
});