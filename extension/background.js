chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'redirect',
    title: 'Redirect with NU prefix',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'redirect') {
    let newUrl = `https://login.nagoya-u.idm.oclc.org/login?qurl=${info.pageUrl}`;
    chrome.tabs.update(tab.id, {url: newUrl}, function(tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
    });
  }
});
