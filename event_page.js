var technologyData = {};

chrome.extension.onMessage.addListener(function(banner, sender) {
  technologyData[sender.tab.id] = banner;

  var alt = "Unrecognized technology";
  var ico = "unrecognized_technology.png";

  for (var i = 0; i < web_technologies.length; i++) {
    if (banner.match(web_technologies[i].regex)) {
      alt = web_technologies[i].title;
      ico = web_technologies[i].icon;
    }
  }

  chrome.pageAction.setIcon({tabId: sender.tab.id, path: "icons/" + ico});
  chrome.pageAction.setTitle({tabId: sender.tab.id, title: alt});
  chrome.pageAction.show(sender.tab.id);
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  delete technologyData[tabId];
});
