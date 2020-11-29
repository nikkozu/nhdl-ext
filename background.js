const BaseURL = "https://nhentai.net/g";

chrome.browserAction.onClicked.addListener(function (tab) {
  // return undefined if url is chrome:// url
  if (tab.url.startsWith("chrome://")) return undefined;

  // return alert if the url not nhentai gallery url
  if (!tab.url.includes(BaseURL))
    return chrome.tabs.executeScript({
      code: `alert("nhdl-ext only work with url https://nhentai.net/g/*")`,
    });
    // return alert("nhdl-ext only work with url https://nhentai.net/g/*");

  let id = tab.url.slice(`${BaseURL}/`.length).replace(/\//g, "");
  window.open(`https://nhdl2.herokuapp.com/download/nhentai/${id}`);
});
