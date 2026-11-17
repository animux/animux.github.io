---
title: "Hello World"
date: 2026-11-18
description: "A sample post showing how the blog works. It's a draft, so it only appears while running npm run dev."
thumbnail: ./thumbnail.svg
tags: [meta, nextjs]
draft: true
---

This is a **sample post**. Because `draft: true` is set, it only shows up in `npm run dev` and is never published. Delete this folder whenever you like.

## How to add a post

1. Run `npm run new-post "Your Title"`.
2. Drop your thumbnail into the new folder.
3. Write in `index.md`, then push.

## Formatting that works

> Blockquotes, *italics*, [links](https://animux.dev) and tables are all supported.

| Feature    | Supported |
| ---------- | --------- |
| Tables     | Yes       |
| Code       | Yes       |
| Images     | Yes       |

```js
export function hello(name) {
  return `Hello, ${name}!`;
}
```

Images next to the post work with a relative path:

![Sample thumbnail](./thumbnail.svg)
