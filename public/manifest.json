{
  "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
  "api": [
    {
      "name": "query",
      "url": "https://search-engine.chat-plugin.lobehub.com/api/v1",
      "description": "查询搜索引擎获取信息",
      "parameters": {
        "properties": {
          "query": {
            "description": "搜索的文本内容",
            "type": "string"
          }
        },
        "required": ["query"],
        "type": "object"
      }
    }
  ],
  "author": "LobeHub",
  "createAt": "2023-08-15",
  "homepage": "https://github.com/lobehub/chat-plugin-search-engine",
  "identifier": "search-engine",
  "meta": {
    "avatar": "🔍",
    "tags": ["web", "search"],
    "title": "Search Engine",
    "description": "Query search engine to get information"
  },
  "settings": {
    "type": "object",
    "required": ["SERPAPI_API_KEY"],
    "properties": {
      "SERPAPI_API_KEY": {
        "title": "SerpAPI API Key",
        "description": "we use [SerpAPI](https://serpapi.com) as backend service | 该插件使用 SerpAPI 作为搜索服务",
        "type": "string",
        "minLength": 64,
        "maxLength": 64,
        "format": "password"
      }
    }
  },
  "ui": {
    "url": "https://search-engine.chat-plugin.lobehub.com/dist/index.js",
    "mode": "module"
  },
  "version": "1"
}
