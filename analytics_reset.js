// Description: this file handles the click events on each html page so that the timer can reset
// and so that it can also track analytics of each click

// require the modules needed to receive messages from the main process
// and to read from/write to files
const ipcRenderer = require('electron').ipcRenderer;
const fs = require("fs");

// add an event listener for clicks on the document/webpage
// parameter e denotes the event data from the click
document.addEventListener('click', function (e) {
	// localStorage can only store string key-value pairs so have to convert clickCount to a number if it exists already
	if (localStorage.clickCount) {
		localStorage.clickCount = Number(localStorage.clickCount) + 1;
	} else {
		localStorage.clickCount = 1;
	}
	
	// used for the array that stores each click and its corresponding data
	// want to add on if there is already clicks stored in localStorage during the same time period
	if (localStorage.clicks) {
		storedClicks = JSON.parse(localStorage.clicks);
	} else {
		storedClicks = [];
	}
	
	// the following builds the individual click object based on fields of the event e
	var click = {};
	click["number"] = localStorage.clickCount;
    click["x"] = e.x;
    click["y"] = e.y;
    click["element"] = e.srcElement.id;
    click["timeElapsed"] = e.timeStamp;
    click["page"] = e.srcElement.baseURI;
    click["time"] = new Date();

	// stores the individual click object in the array with other click objects
    storedClicks[localStorage.clickCount-1] = click;
	
	// converts it to string and stores it back in localStorage to keep using it during the same time period
    localStorage.setItem("clicks", JSON.stringify(storedClicks));
    
	// last step is to send reset to the main process so that the inactivity timer does not run yet
	ipcRenderer.send('reset')
})

// runs when this child process receives 'writeFile' from the main process
ipcRenderer.on('writeFile', () => {
	// builds the 'user' object and then appends it in analytics.txt file
	var clicks = JSON.parse(localStorage.clicks);
	var user = {};
	user["clicks"] = clicks;
	var userWrite = JSON.stringify(user) + ",";
	fs.appendFile("analytics.txt", userWrite, (err) => {
		if (err) throw err;
	})
})

// runs when this child process receives 'resetValues' from the main process
// so basically used to reset the 'user' once 5 mins of inactivity happens
// (set everything back to zero or delete it from localStorage)
ipcRenderer.on('resetValues', () => {
    if (localStorage.clickCount) {
        localStorage.clickCount = 0;
    }
    if (localStorage.clicks) {
		localStorage.removeItem("clicks")
	}
})