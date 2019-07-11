chrome.tabs.executeScript(null, {
        code: 'var config = ' + JSON.stringify(getKeywords)
    }, function() {
        chrome.tabs.executeScript(null, {file: 'content.js'});
    });
chrome.browserAction.onClicked.addListener(function(tab) {
    alert('working?');
})
alert('works')


  // chrome.runtime.onInstalled.addListener(function() {
  //   chrome.storage.sync.set({color: '#3aa757'}, function() {
  //     console.log("The color is green.");
  //   });
  // })