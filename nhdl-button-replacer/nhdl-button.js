var gallery_id = document.getElementById("gallery_id");

// hide old download button
var button = document.getElementById("download");
button.style.display = "none";

var nhdl_link = `https://nhdl2.herokuapp.com/download/nhentai/${gallery_id.lastChild.data}/?e=cbz`;
var nh_link = button.href;

// create new download button
var values = [
    {
        link: nhdl_link,
        text: "nhdl",
    },
    {
        link: nh_link,
        text: "torrent",
    },
];

// create new select download
var select = document.createElement("select");
select.name = "downloads";
select.id = "downloaders";
select.className = "btn btn-secondary";
select.setAttribute('onchange', "window.open(this.value, '_self')");
select.style.appearance = 'none';

// Create options
// default options
var defOption = document.createElement("option");
defOption.value = "#";
defOption.text = "Select to Download";
select.append(defOption);

// create downloader options
for (const val of values) {
    var option = document.createElement("option");
    option.value = val.link;
    option.text = val.text;
    select.appendChild(option);
}

// append select to replace old download
document.querySelector(".buttons").appendChild(select);
// replace nhentai torrent link
// button.href = link;
