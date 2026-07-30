# Manav Neema — Portfolio

Portfolio website for Manav Neema, a Data Engineer and ML Systems Builder
specialising in production data platforms, analytics, and responsible AI.

**Live website:**
[manav-neema-portfolio-2026.yashgpt2894.chatgpt.site](https://manav-neema-portfolio-2026.yashgpt2894.chatgpt.site)

## Run locally

Requires Node.js 24 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

## Project structure

```text
public/
  downloads/     Resume
  images/        Portfolio photography
src/
  app/           Page, metadata, SEO, and global styles
  components/    Portfolio sections and navigation
  lib/           Shared portfolio content
  types/         TypeScript types
worker/          Production server entry point
```

Built with Next.js, React, TypeScript, Tailwind CSS, and Vinext.
