var gallery_id = document.getElementById("gallery_id");
var button = document.getElementById("download");
var link = `https://nhdl2.herokuapp.com/download/nhentai/${gallery_id.lastChild.data}/`

// replace nhentai torrent link
button.href = link;
