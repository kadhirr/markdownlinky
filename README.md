# Markdown Linky

A Chrome extension that copies page URLs as Markdown links.

## Features

- **Click extension icon** or **right-click on page with no selection**: Copies `[Page Title](URL)` to clipboard
- **Select text and right-click**: Copies `[Selected Text](URL)` to clipboard

## Installation

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select this folder
5. Done! The extension is now installed

## Usage

- Click the extension icon in the toolbar to copy the current page as a Markdown link
- Right-click anywhere on the page to use the context menu
- Select text first to use it as the link title instead of the page title

## Files

- `manifest.json` - Extension configuration
- `popup.html` - Popup UI
- `popup.js` - Popup functionality
- `background.js` - Context menu handler
- `icons/` - Extension icons
