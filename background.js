const BaseURL = "https://nhentai.net/g";

chrome.browserAction.onClicked.addListener(function(tab) {
    if (!tab.url.includes(BaseURL)) return alert("nhdl-ext only work with url https://nhentai.net/g/*");
    let id = tab.url.slice(`${BaseURL}/`.length).replace(/\//g, "");

    window.open(`https://nhdl2.herokuapp.com/download/nhentai/${id}`);
});
