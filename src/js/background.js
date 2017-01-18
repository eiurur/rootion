const RandomComic = require('./lib/RandomComic');

const openCurrentTab = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let tab = tabs[0];
    new RandomComic(tab).open();
  });
}

chrome.browserAction.onClicked.addListener( (tab) => openCurrentTab() )

chrome.commands.onCommand.addListener( (command) => openCurrentTab() )
