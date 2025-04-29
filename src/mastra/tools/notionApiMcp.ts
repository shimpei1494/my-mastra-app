import { MCPConfiguration } from "@mastra/mcp";

const notionApiKey = process.env.NOTION_API_KEY;

export const notionApiMcp = new MCPConfiguration({
  servers: {
    notionApi: {
      command: "npx",
      args: ["-y", "@notionhq/notion-mcp-server"],
      env: {
        "OPENAPI_MCP_HEADERS": `{\"Authorization\": \"Bearer ${notionApiKey}\", \"Notion-Version\": \"2022-06-28\" }`
      },
    },
  },
});