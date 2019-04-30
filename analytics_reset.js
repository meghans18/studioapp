const ipcRenderer = require('electron').ipcRenderer;
const fs = require("fs");
document.addEventListener('click', function (e) {
	if (localStorage.clickCount) {
		localStorage.clickCount = Number(localStorage.clickCount) + 1;
	} else {
		localStorage.clickCount = 1;
	}
	if (localStorage.clicks) {
		storedClicks = JSON.parse(localStorage.clicks);
	} else {
		storedClicks = [];
	}
	var click = {};
	click["number"] = localStorage.clickCount;
    click["x"] = e.x;
    click["y"] = e.y;
    click["element"] = e.srcElement.id;
    click["timeElapsed"] = e.timeStamp;
    click["page"] = e.srcElement.baseURI;
    click["time"] = new Date();

    storedClicks[localStorage.clickCount-1] = click;
    localStorage.setItem("clicks", JSON.stringify(storedClicks));

    var clickstoshow = JSON.parse(localStorage.clicks);
    var myJson = JSON.stringify(clickstoshow);
	console.log(myJson);
    
	ipcRenderer.send('reset')
})

ipcRenderer.on('writeFile', () => {
	var clicks = JSON.parse(localStorage.clicks);
	var user = {};
	user["clicks"] = clicks;
	var userWrite = JSON.stringify(user) + ",";
	fs.appendFile("analytics.txt", userWrite, (err) => {
		if (err) throw err;
	})
})

ipcRenderer.on('resetValues', () => {
    if (localStorage.clickCount) {
        localStorage.clickCount = 0;
    }
    if (localStorage.clicks) {
		localStorage.removeItem("clicks")
	}
})