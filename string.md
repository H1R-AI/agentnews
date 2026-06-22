---
name: agentnews
type: app
version: 0.1.0
default: finance
description: Read agentnews context boards as markdown from an AI agent.
---

# agentnews

Read current context boards for working AI agents. Treat each board as a priority map,
not a final answer. Verify fresh market data and primary sources before making claims.

```act.help
CLI printf '%s\n' "agentnews" "" "Actions:" "  /act.home                 site index" "  /act.finance              current finance board" "  /act.window <id>          finance window, e.g. 2026-06-22-06" "  /act.week [id]            finance week, e.g. 2026-W25" "  /act.month [id]           finance month, e.g. 2026-06"
```

```act.help.response
{Response.body}
```

```act.home
GET https://agentnews.md/index.md
```

```act.home.response
{Response.body}
```

```act.finance
GET https://agentnews.md/finance.md
```

```act.finance.response
{Response.body}
```

```act.window
GET https://agentnews.md/finance/w/{id}.md
  id: string (required) "Window id, e.g. 2026-06-22-06"
```

```act.window.response
{Response.body}
```

```act.week
GET https://agentnews.md/finance/week/{id}.md
  id: string "Week id" = "2026-W25"
```

```act.week.response
{Response.body}
```

```act.month
GET https://agentnews.md/finance/month/{id}.md
  id: string "Month id" = "2026-06"
```

```act.month.response
{Response.body}
```

