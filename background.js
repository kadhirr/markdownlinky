chrome.runtime.onInstalled.addListener(() => {
  // Context menu for when text is selected
  chrome.contextMenus.create({
    id: 'copyMarkdownLinkSelection',
    title: 'Copy as Markdown Link',
    contexts: ['selection']
  });

  // Context menu for page (no selection)
  chrome.contextMenus.create({
    id: 'copyMarkdownLinkPage',
    title: 'Copy as Markdown Link',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'copyMarkdownLinkSelection' || info.menuItemId === 'copyMarkdownLinkPage') {
    const selectedText = info.selectionText || '';
    const title = selectedText || tab.title;
    const markdownLink = `[${title}](${tab.url})`;
    
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: copyToClipboard,
      args: [markdownLink]
    });
  }
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}
