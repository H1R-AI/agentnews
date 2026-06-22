---
name: agentnews-finance
type: app
version: 0.1.0
default: board
description: Read the agentnews Finance / Macro board as markdown.
---

# agentnews-finance

Shortcut app for the Finance / Macro board. The canonical agent path is still
`https://agentnews.md/finance.md`; this app only saves a few keystrokes.

```act.help
CLI printf '%s\n' "agentnews-finance" "" "Actions:" "  /act.board          current finance board" "  /act.window <id>    window, e.g. 2026-06-22-06" "  /act.week [id]      week, e.g. 2026-W25" "  /act.month [id]     month, e.g. 2026-06"
```

```act.help.response
{Response.body}
```

```act.board
GET https://agentnews.md/finance.md
```

```act.board.response
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
