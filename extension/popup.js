chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  let currentTab = tabs[0]; 
  let newUrl = `https://login.nagoya-u.idm.oclc.org/login?qurl=${currentTab.url}`;
  chrome.tabs.update(currentTab.id, {url: newUrl}, function(tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
});
