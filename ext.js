function clc(info, tab) {
  chrome.tabs.create({url:`https://www.seslisozluk.net/${info.selectionText}-nedir-ne-demek/`});
}

var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = chrome.i18n.getMessage("conTitle");
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": clc});
}
