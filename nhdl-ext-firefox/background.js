const BaseURL = "https://nhentai.net/g";

browser.browserAction.onClicked.addListener(function (tab) {
  // return alert if the url not nhentai gallery url
  if (!tab.url.includes(BaseURL))
    return browser.tabs.executeScript({
      code: `alert("nhdl-ext only work with url https://nhentai.net/g/*")`,
    });
    // return alert("nhdl-ext only work with url https://nhentai.net/g/*");

  let id = tab.url.slice(`${BaseURL}/`.length).replace(/\//g, "");
  browser.tabs.create({
    url: `https://nhdl2.herokuapp.com/download/nhentai/${id}/?e=cbz`
  });
});
