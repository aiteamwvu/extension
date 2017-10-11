var remoteUrl = "http://aiwvu.ml:5001/";

function click() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
    var category = document.getElementById("category").value;
    var urlToPost = remoteUrl + "?url=" + currentUrl + "&category=" + category;
    send(urlToPost);
  });
}

function send(url) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', url, true);
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {}
	    window.close();
	};
	xmlhttp.send(null);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addButton').addEventListener('click', click);
});
