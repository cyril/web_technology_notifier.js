const request = "X-Powered-By";

var client = new XMLHttpRequest();
client.open("GET", document.location.pathname, true);
client.send();
client.onreadystatechange = function() {
  if (this.readyState == 2) {
    var data = this.getResponseHeader(request);
    if (data) chrome.extension.sendMessage(data);
  }
}
