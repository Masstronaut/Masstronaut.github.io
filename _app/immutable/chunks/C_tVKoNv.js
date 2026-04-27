const n=`---
title: grep cheat sheet
description: '\`grep -h\` is worthless, so I use this cheat sheet to remember the syntax for things I like to grep.'
slug: notes/grep-cheat-sheet
publish: true
lastmod: 2026-04-27
date: 2026-04-27
aliases: null
tags:
- status/seedling
---

If there's a great \`grep\` use case I'm missing here, please select this sentence and use Doc Duck to tell me about it!

## Pipe in output from another command

Sometimes the text I want to search is produced by another command, so I pipe it straight into \`grep\`.

\`\`\`\`bash
ls | grep "input"
\`\`\`\`

Example output:

\`\`\`\`text
input
input-backup.txt
\`\`\`\`

## Show all lines that contain specific text

This is the basic \`grep\` case: search a file and print only the lines that contain the text you care about.

\`\`\`\`bash
grep "input" server.log
\`\`\`\`

Example output:

\`\`\`\`text
2026-04-27 09:14:22 validating input payload
2026-04-27 09:14:23 writing input to cache
2026-04-27 09:14:25 input processing complete
\`\`\`\`

## Show all lines that do not contain specific text

Use \`-v\` to invert the match and show every line that does *not* include the text.

\`\`\`\`bash
grep -v "input" server.log
\`\`\`\`

Example output:

\`\`\`\`text
2026-04-27 09:14:20 server starting
2026-04-27 09:14:21 loading configuration
2026-04-27 09:14:24 cache warm complete
\`\`\`\`

## Match text using a regular expression

Use \`-E\` for extended regular expressions when you want to match a pattern instead of fixed text. This example finds files which took at least 100ms to format.

\`\`\`\`bash
npm run format | grep -E "[0-9]{3,}ms"
\`\`\`\`

Example output:

\`\`\`\`text
src/lib/components/component.browser.test.ts 111ms (unchanged)
src/lib/components/component.test.ts 125ms (unchanged)
src/lib/components/component.ts 286ms (unchanged)
\`\`\`\`

## Show the preceding and following N lines for text that matches "input"

When you need surrounding context as well as the matching line, use \`-C N\` to show \`N\` lines before and after each match.

\`\`\`\`bash
grep -C 2 "input" server.log
\`\`\`\`

Example output:

\`\`\`\`text
2026-04-27 09:14:20 server starting
2026-04-27 09:14:21 loading configuration
2026-04-27 09:14:22 validating input payload
2026-04-27 09:14:23 writing input to cache
2026-04-27 09:14:24 cache warm complete
2026-04-27 09:14:25 input processing complete
2026-04-27 09:14:26 request finished
\`\`\`\`
`;export{n as default};
