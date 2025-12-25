document.getElementById('copyBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // Get selected text from the page
  const [result] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => window.getSelection().toString()
  });
  
  const selectedText = result.result;
  const title = selectedText || tab.title;
  const markdownLink = `[${title}](${tab.url})`;
  
  // Copy to clipboard
  await navigator.clipboard.writeText(markdownLink);
  
  // Show confirmation
  const status = document.getElementById('status');
  status.style.display = 'block';
  setTimeout(() => {
    status.style.display = 'none';
  }, 2000);
});
