chrome.runtime.onInstalled.addListener((async()=>{let e=chrome.runtime.getURL("options.html"),t=await chrome.tabs.create({url:e});console.log(`Created tab ${t.id}`)}));