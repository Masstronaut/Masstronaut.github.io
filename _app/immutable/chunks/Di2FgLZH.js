const e=`---
title: Open neovim edgebar with focus set
description: A deep dive into neovim config, controlling focus, pane management with edgy.nvim, and a little open source contribution to boot!
slug: notes/focus-edgy-view
publish: true
lastmod: 2024-08-10
date: 2024-08-10
aliases: null
tags:
- status/seedling
- topic/neovim
- topic/opensource
---

Recently I [switched to Neovim](I%20use%20Neovim%20btw.md) as my go-to text editor, and have been configuring it as an IDE. The flexibility to have it behave exactly the way I want is amazing!

One GUI element of VS Code that I've missed is having a sidebar with hotkeys to quickly jump between different views, such as Git and my project's file tree. Fortunately, there's a great library by [folke](https://github.com/folke) that is designed to create and manage sidebars: [edgy.nvim](https://github.com/folke/edgy.nvim). The sidebar config is reminiscent of declarative languages like CSS, so setting up my sidebar felt pretty familiar. To start, I created a side with three [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) views:

1. A file tree (explorer) view
1. A list of my open buffers
1. Git tree view of my modified files

The [lazy.nvim](https://github.com/folke/lazy.nvim/?tab=readme-ov-file) edgy config for that looks like this:

\`\`\`\`lua filename="~/.config/nvim/lua/plugins/edgy.nvim"
return {
	"folke/edgy.nvim",
	event = "VeryLazy",
	init = function()
		vim.opt.laststatus = 3 -- show a single status line at the bottom
		vim.opt.splitkeep = "screen" -- prevents jumping when open/close sidebars
	end,
	opts = {
		right =	{
				title = "Files",
				ft = "neo-tree",
				filter = function(buf)
					return vim.b[buf].neo_tree_source == "filesystem"
				end,
				open = "Neotree filesystem",
				size = { height = 0.5 }, -- 1/2 window height
				pinned = true,
			},
			{
				title = "Buffers",
				ft = "neo-tree",
				filter = function(buf)
					return vim.b[buf].neo_tree_source == "buffers"
				end,
				pinned = true,
				open = "Neotree position=top buffers",
				size = { height = 0.25 },
			},
			{
				title = "Git",
				ft = "neo-tree",
				filter = function(buf)
					return vim.b[buf].neo_tree_source == "git_status"
				end,
				pinned = true,
				open = "Neotree position=left git_status",
				size = { height = 0.25 },
			},
			-- any other neo-tree windows should also be here
			"neo-tree",
		}
	}
}
\`\`\`\`

Overall this is great! I get a sidebar with all the panels I want in one place. It has a problem though. Perhaps because the three \`pinned\` views of the edgebar are opened in the order I declare them (files -> buffers -> git), my focus always ends up in the git view when I open it. I put it on the bottom because I use it the least, though. What I really want is to default to the Files view getting focus, with a specific binding for each of the views if I want to focus a specific one.

## Programmatically focusing a window in Neovim

After a quick search, I found the API for setting focus on a window:

\`\`\`\`lua
vim.api.nvim_set_current_win(window_id)
\`\`\`\`

Super simple and straightforward! Unfortunately, it requires a window ID. I have no idea what my window IDs are. The good news is that Neovim has a similarly simple API for that one, too.

\`\`\`\`lua
-- integer[]
local window_ids = vim.api.nvim_list_wins()
\`\`\`\`

I'm going to feel like such a champion calling a function that lists all my wins!

Now I've got a list of window IDs and and an API to set my focus to one of them. The only question that remains is: which one is which? I have no hope of figuring out which \`window_ids\` integer corresponds to which window. For this one I'm going to need to use the [edgy API](https://github.com/folke/edgy.nvim?tab=readme-ov-file#-api). The \`get_win(window?)\` API looks like what I'm after!

I tried calling it with one of my window IDs, only to have the LSP tell me I'm doing it wrong! Apparently the API takes a \`window\` object, not an integer?

<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/6bb0a76fd64b73c476f50e5212c5eb83.png"/>
<source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/467b41e0d88bd7afcb7d4a5bf8508f7a.png"/>
<img alt="A code block on allandeutsch.com rendered to show the filename in a tab along the top bar of the code block"/>
</picture>

What the heck, how am I supposed to get a window object if not via a window ID from the \`nvim_list_wins()\` API?

I did some digging which ultimately resulted in me reading the [edgy source code for the \`get_win()\` function](https://github.com/folke/edgy.nvim/blob/ebb77fde6f5cb2745431c6c0fe57024f66471728/lua/edgy/editor.lua#L167) and the short answer is: I'm not supposed to! The function defaults to grabbing the **integer** window ID for the current window if one isn't provided. What's up with that?! After verifying that it is in fact using an integer the whole time, I opened a [PR to fix the type annotation for the window parameter](https://github.com/folke/edgy.nvim/pull/110). Anyway long story short, the integer window ID works fine, so until that PR gets merged I'm going to just ignore the warning. This is the magic of open source: if you find something wrong, you can make the change and submit a PR to fix it!

That was a bit of a tangent, but it's always great to contribute to open source. Anyway, I've still got a problem: I don't know the window ID of my neo-tree panes! At this point I was getting comfortable poking around in the edgy codebase, so I looked for where I can find the \`Title\` value I set for each of my views. I found a function to select a window, and in the code to open a selector UI it has [the following line](https://github.com/folke/edgy.nvim/blob/ebb77fde6f5cb2745431c6c0fe57024f66471728/lua/edgy/editor.lua#L130):

\`\`\`\`lua
local title = w.view.get_title()
\`\`\`\`

Perfect! That is *exactly* what I need. It's all coming together:

1. Channel my inner winner and call \`nvim_list_wins()\`
1. With each window ID, get the corresponding edgy \`Window\` object
1. Check if the value from \`Window.view.get_title()\` matches the name of the window I want
1. If it does, set my focus to that window

With only one major bump along the road, this seems to be going pretty smoothly. I quickly coded up a helper function for this since I want to use it in 4 separate keybindings: One to open the edge bar, and one for each of the three views within that edge bar. Here's what that looks like:

\`\`\`\`lua filename="~/.config/nvim/lua/plugins/edgy.lua"
---@param title string: the edgy title of the window to focus
local focus_window = function(title)
	local all_win_ids = vim.api.nvim_list_wins()
	local edgy = require("edgy") -- owns the window titles
	for _, win_id in ipairs(all_win_ids) do -- loop over all windows
		local win = edgy.get_win(win_id) -- edgy window.view stores the title
		if win and win.view.get_title() == title then
			vim.api.nvim_set_current_win(win_id)
		end
	end
end
\`\`\`\`

All that's left is to call this sucker in my keybinds and I'm ready to roll! For brevity, here's just the keybind to open the edge bar on the right:

\`\`\`\`lua filename="~/.config/nvim/lua/plugins/edgy.lua"
return {
	"folke/edgy.nvim",
	-- other configs...
	keys = {
		{
			"<leader>pl", -- the keybinding
			function() -- what happens when I press it
				-- ensure neo-tree is loaded
				require("lazy").load({plugins = {"neo-tree.nvim"}})
				-- Open the right edge bar
				require("edgy").toggle("right")
				focus_window("Files") -- The magic sauce!
			end
		}
	}
}
\`\`\`\`

Now that everything is in place, I was ready to feel like a wizard, conjuring up trees and having my cursor arrive precisely where it is meant to. I ran \`:source %\` to reload my new edgy config and try it out:

<video autoplay loop playsinline><source media="(prefers-color-scheme: light)" src="https://img.allandeutsch.com/allandeutschcom-note-images/100ee2eba506f0ecd22e5398f7bca788.mp4" type="video/mp4"><source media="(prefers-color-scheme: dark)" src="https://img.allandeutsch.com/allandeutschcom-note-images/2d1c36903f3468185b8652a42566a55c.mp4" type="video/mp4"><track kind="captions" src="" srclang="en" label="A neovim window is displayed and a sidebar containing a filetree, buffer list, and git modified files tree view is toggled open and closed."></video>

Uh oh. It's still behaving exactly the same, focusing the Git view in the bottom right corner. Once the pane is opened, my keybinds to jump to a specific named view work correctly. What could cause that? My first thought is that either edgy or neo-tree opens asynchronously to avoid blocking the main thread. I'm by no means an expert in Lua, so I have no idea how the parallelism engine works for the language.

After a bit of research, I found [this video by TJ DeVries about the vim scheduler](https://www.youtube.com/watch?v=GMS0JvS7W1Y). I found it very interesting, but the TL;DR: here is that neovim lua code has an event loop similar to *JavaScript*. To queue a function to be executed once the runtime finishes executing everything on the event loop, call \`vim.schedule()\` and pass it the function you want it to run. Not too bad! With this change, the function run on keybind looks something like this:

\`\`\`\`lua
function()
	require("lazy").load({ plugins = { "neo-tree.nvim" } })
	require("edgy").toggle("right")
	vim.schedule( function()
		focus_window("Files")
	end)
end
\`\`\`\`

Another round of \`:source %\` to reload the config, and this time it works how I want! I love that I have so much control over the behavior of my editor in Neovim. You can check out the final [edgy.lua config on my GitHub](https://github.com/Masstronaut/nvim-config/blob/main/lua/plugins/edgy.lua).
`;export{e as default};
