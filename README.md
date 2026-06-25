<p align="center">
  <img src="./public/agentnews-logo.webp" alt="AgentNews" width="520" />
</p>

# AgentNews

AgentNews publishes compact context boards for working AI agents.

It is not a news article site and not a conclusion engine. It gives agents a
shared `now`: the current frame, uncertainty, source trail, watch threads, and
follow-up search directions they should understand before answering current
finance or macro questions.

Humans read HTML. Agents read the same content as markdown.

- Site: <https://agentnews.md>
- Finance board: <https://agentnews.md/finance>
- Agent markdown: <https://agentnews.md/finance.md>

## Why

General AI assistants often answer market questions from generic searches:

```text
US stock market outlook this week
Fed rate decision PCE inflation stock market
Nasdaq outlook oil dollar Treasury yields
```

Those queries can miss the current market frame. AgentNews gives the agent a
small, inspectable priority map before it searches, reasons, or answers.

Use it as context, not advice.

## How Agents Should Use It

1. Read the relevant board first.
2. Treat it as a priority map, not a final answer.
3. Preserve uncertainty and evidence labels.
4. Check fresh prices, rates, oil, dollar, official data, or primary sources
   before making market-facing claims.
5. Use follow-up queries, watch threads, and falsifiers as search seeds.
6. If newer evidence contradicts the board, say what changed.

## Claude Code Plugin

AgentNews includes a Claude Code plugin with one skill: `agentnews`.

Install from this repository:

```sh
claude plugin marketplace add H1R-AI/agentnews
claude plugin install agentnews@agentnews
```

Check it:

```sh
claude plugin details agentnews@agentnews
```

After installation, Claude Code should use AgentNews automatically for current
finance, macro, US stocks, rates, FX, commodities, crypto-market, or market
outlook questions.

Example prompt:

```text
Use AgentNews and summarize the three variables I should watch first for this
week's US stock market outlook.
```

## Codex Skill / Plugin

This repository also includes a Codex-compatible skill and plugin:

```text
skills/agentnews/SKILL.md
plugins/agentnews/
```

Install the Codex plugin from this repository:

```sh
codex plugin marketplace add H1R-AI/agentnews
codex plugin add agentnews@agentnews
```

Check it:

```sh
codex plugin list --marketplace agentnews
```

The skill instructs the agent to read:

```text
https://agentnews.md/finance.md
```

before answering current market questions, then verify with fresh market data
or primary sources.

## String

AgentNews domain boards are also String-compatible markdown web apps.

String is an agent-native web/app runtime for opening markdown sites and
installing them as apps. Learn more: <https://www.string-os.org>.

In String:

```text
/open https://agentnews.md/finance.md
/install
```

This installs the finance board as:

```text
app:agentnews-finance
```

## Current Domains

- Finance / Macro
  - HTML: <https://agentnews.md/finance>
  - Markdown: <https://agentnews.md/finance.md>
  - Archive: <https://agentnews.md/finance/archive>

More domains can be added as separate boards.

## Build

```sh
npm install
npm run build
```

The build composes `content/` into route markdown under `.agentnews/site`, then
uses Astro and `@string-os/astro-sfmd` to build HTML and `.md` twins into
`dist/`.

## Deploy

This repo is deployed with Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 24

`functions/_middleware.ts` handles markdown negotiation on Cloudflare Pages.

## Repository Split

This public repository contains the site source, published content, AgentNews
skills, and plugin manifests.

Internal reporter/desk process tools and private operating notes live in the
separate private `agentnews-ops` repository.
