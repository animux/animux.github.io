---
title: "3 Claude Prompts That Do Your Business Paperwork"
date: 2026-11-18
description: "Copy-paste prompts that turn rough client notes into a Word proposal, a PowerPoint pitch deck and an Excel budget, as real files you can send."
thumbnail: ./thumbnail.jpg
tags: [ai, claude, business, productivity]
draft: false
---

Proposals, pitch decks and budgets eat hours every week, and most of that time goes into formatting rather than thinking. These three prompts hand that work to Claude. Paste in your notes, and you get back a real **Word document**, **PowerPoint deck** and **Excel workbook** that you can open, tweak and send.

They're the same prompts from my reel. Run them in order and each one builds on the last.

## Before you start

Claude can only hand you real files when file creation is switched on:

**Settings → Capabilities → "Code execution and file creation"**

In the newer settings layout it's called **"Create and edit files"**. Turn it on once and you're set.

## 1. Client proposal (Word document)

Start with whatever notes you have from the client call. Bullet points, voice-note transcripts and messy chat logs all work.

```text
Act as my business writer. Using the client notes below, write a one-page project proposal as a Word document. Include a short intro, the client's problem, our solution, a scope list, a timeline, a price table and next steps with a signature line. Keep it clear and confident, written for a busy business owner. Client notes: [paste your notes]
```

**What you get:** a one-page `.docx` with a price table and a signature line, ready to send.

## 2. Pitch deck (PowerPoint)

Run this in the same chat, straight after the proposal, so Claude reuses everything it just wrote.

```text
Turn the proposal above into a 7-slide PowerPoint pitch deck: problem, solution, how it works, timeline, pricing, why us, next step. One idea per slide, short headlines, no more than 3 bullets per slide, and speaker notes for every slide. Use these brand colours: [your colours].
```

**What you get:** a `.pptx` with seven focused slides and speaker notes, so you know what to say on each one.

> **Tip:** give exact hex codes for your brand colours (for example `#39E079`) rather than names like "green". You'll get a much closer match.

## 3. Budget sheet (Excel)

This one stands on its own. Paste your monthly numbers or upload an existing file.

```text
Build an Excel budget for my business from the numbers below. Make one tab for monthly sales, one for expenses by category and a summary tab with working formulas for totals, profit and profit margin. Add a chart of profit by month and highlight any month where expenses were higher than sales. Numbers: [paste them or upload your file]
```

**What you get:** an `.xlsx` with three tabs, live formulas (not pasted values), a profit chart, and any loss-making months highlighted automatically.

## Make them work better

- **Give it real detail.** The more specific your notes (budget, deadline, who the client is), the less you'll need to edit.
- **Edit in the chat.** Ask for changes like "make the price table include a 50% deposit" or "add a slide on case studies", and Claude will update the file.
- **Check the numbers.** Read every price, date and total before anything goes to a client.

Save these three prompts somewhere handy and that's your next proposal, deck and budget sorted in minutes.
