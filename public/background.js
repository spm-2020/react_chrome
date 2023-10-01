/* eslint-disable no-undef */

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log("welcome",tabs[0].url)
    // chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"});  
  });