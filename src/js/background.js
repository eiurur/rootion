const RandomComic = require('./lib/RandomComic');

chrome.browserAction.onClicked.addListener( (tab) => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let tab = tabs[0];
    new RandomComic(tab).open();
  });
})