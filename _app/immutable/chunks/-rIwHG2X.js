const e=`---
title: My spaced repetition workflow
description: The setup and workflow I use to retain what I learn and deepen my understanding.
slug: notes/spaced-repetition-workflow
publish: true
lastmod: 2021-06-25
date: 2021-06-25
aliases:
- My spaced repetition workflow
tags:
- status/evergreen
- topic/learning
---

## Prerequisites

1. Have Obsidian.md installed and set up.

## Setup

1. Open the Obsidian settings
1. Select the \`Community plugins\` option from the left navigation pane
1. Ensure \`Safe mode\` is turned off
1. Click the \`Browse\` button
1. Find and install the \`Spaced Repetition\` plugin from the list of community plugins
1. In the \`Community plugins\` page, under \`Installed plugins\` find and enable \`Spaced repetition\`

### Recommended Spaced Repetition configuration settings

1. In the left navigation pane, under \`Plugin options\` select \`Spaced Repetition\`
1. Enable the option to \`Save scheduling comment on the same line as the flashcard's last line\`. This ensures flashcards in markdown lists are rendered correctly.
1. Enable the option to \`Bury related cards until the next day\`. This prevents two deletion cards from the same block of text being shown on the same day.
1. Change the \`Separator for inline flashcards\` to \`:-:\`. This improves compatibility with code blocks, as the default option (\`::\`) is commonly used in programming languages as a namespace separator.
1. Change the \`Separator for multiline flashcards\` to \`:--:\`. This improves compatibility with code blocks, as sometimes the default option (\`?\`) is used as part of a ternary operator on its own line to respect line length settings.

## Authoring notes

### Setting up a note to contain flashcards

To indicate that a note contains flashcards, it must contain one of your flashcard tags. By default, the flashcard tag is \`flashcards\`. Tags can be inserted into the body of the note using \`#flashcards\`. Since the fact that a note contains flashcards is metadata, I prefer to put it in the *YAML Frontmatter* of a note. Frontmatter must be at the start of a markdown file, and is started and ended by \`---\` on its own line. Here's a basic example with no other metadata:

\`\`\`\`YAML
---
tags:
  - flashcards
---
\`\`\`\`

Flashcards can be separated into multiple decks. This can be helpful if you want to sort them by topic (such as biology, physics, CS, etc.), type (vocab, concepts, ideas, etc.) or some other method meaningful to you. Doing so is very simple - just append them to the end of the \`flashcards\` tag and use \`/\` to separate the hierarchy of the decks. For example:

\`\`\`\`
tags:
  - flashcards/subjects/math
\`\`\`\`

Would put notes in that file into a \`math\` deck that exists within a larger \`subjects\` deck.

### Authoring notes that contain flashcards

When authoring notes, insert flashcards whenever writing the key details of a topic that you wish to retain. One easy example is in a list with definitions or explanations. In these cases, I'll typically **bold** the term, add a colon, the inline flashcard separator, and then the definition, like this:

* **Inline flashcard**::-: Flashcards with both sides of the card defined on a single line, like this one.

Also use inline flashcards in small paragraphs that contain key information. The benefit of this is:-:quickly apparent when it fills your flashcard deck with key information you want to retain.

Make sure to continue writing *on a new line* after using inline flashcards! Doing so ensures that extra content doesn't get added to the back of the card. ==Highlighting== text in a flashcard note creates a ==cloze deletion==. This type of flashcard will show all the surround context, with just the highlighted bit removed for you to recall. Very helpful for learning terms that are used in a sentence or for key info written in the middle of a sentence.

#### Multi-line flashcards

Sometimes the answer to a question is longer than a single line. I find this is often the case for lists I want to retain (such as *Cialdini's principles of persuasion*, *Hierarchy of Needs*, or *Bloom's taxonomy*). For those, particularly the ordered ones, I like to note them as ordered lists. When reviewing a flashcard on them, I want the back side of my flashcard to be the list of all the items. This requires multi-line flashcards.

How do I author multi-line flashcards?
:--:

1. Write the prompt that goes on the front of the card
1. On a new line, add the multi-line flashcard separator: \`:--:\`
1. On a new line below the separator, write multiple lines of answer
   1. Avoid adding any blank lines within the content that belongs on the back of the flashcard
1. Add a blank line at the **end** of the flashcard.
`;export{e as default};
