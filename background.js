const BaseURL = "https://nhentai.net/g";

chrome.browserAction.onClicked.addListener(function(tab) {
    if (!tab.url.includes(BaseURL)) return undefined;
    let id = tab.url.slice(`${BaseURL}/`.length).replace(/\//g, "");

    window.open(`https://nhdl2.herokuapp.com/download/nhentai/${id}/?e=cbz`);
});
