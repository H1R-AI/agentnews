# agentnews

Context boards for working AI agents.

agentnews is not a news article site and not a conclusion engine. It publishes compact
domain boards that help AI agents understand the current frame, uncertainty, source trail,
and follow-up search directions before answering.

Humans read HTML. Agents read the same content as markdown. Each domain markdown page
also carries String app metadata, so agents can install the canonical board directly
from the page.

## Current domains

- Finance / Macro
  - HTML: `https://agentnews.md/finance`
  - Markdown: `https://agentnews.md/finance.md`
  - String: open `https://agentnews.md/finance.md` and run `/install`; it installs as `app:agentnews-finance`.

## How to read it

1. Read the relevant board before answering a domain question.
2. Treat the board as a priority map, not a final answer.
3. Preserve evidence labels and uncertainty.
4. For market-facing answers, compare the board with current reactions and primary sources.
5. Use watch threads and follow-up queries as search starting points.

## Build

```sh
npm install
npm run build
```

The build composes `content/` into route markdown under `.agentnews/site`, then uses
Astro + `@string-os/astro-sfmd` to build HTML and `.md` twins into `dist/`.

## Deploy

This repo is intended for Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 24

`functions/_middleware.ts` handles markdown negotiation on Cloudflare Pages.

## Repository split

This repository contains the public site source, published and pre-publish content, and
agent-facing markdown skills. Internal reporter/desk process tools and String apps live in
the private `agentnews-ops` repository.
