// require the necessary modules for the main process
const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const ipcMain = electron.ipcMain;
const fs = require("fs");

let win
function createWindow() {
	// creates a new window
	let win = new BrowserWindow({frame: false, fullscreen: true})
    win.loadFile('index.html')
    //win.webContents.openDevTools()

	// used to switch between different project home pages in the timer
    var pages = ['brinton/nowShowing.html', 'whitman/index.html', 'risingTogether/index.html'] 

	// different variables to help the timer run
    var t, openSwitch, closeSwitch;

    function idleTimer() {
		// when the main process receives 'reset', runs the resetTimer function below
        ipcMain.on('reset', () => {
            resetTimer();
        })

        var i = 0; // used to cycle through pages
        function rotation() {

			// first step is to put it back on the homepage no matter where it's at
            win.loadFile('index.html')

			// send messages to child process (actions can be found in analytics_reset.js)
            win.webContents.send('writeFile');
            win.webContents.send('resetValues');

			// this interval runs every 10 minutes, so every 10 minutes the page will change to a different project homepage
            openSwitch = setInterval(function() {
                if (i >= pages.length) {
                    i = 0;
                }
                win.loadFile(pages[i]);
                i++;

				// this setTimeout runs every 5 minutes within the 10  minutes of the interval, and will show the homepage again
                closeSwitch = setTimeout(function() {
                    win.loadFile('index.html');
                }, 300000); // 300000
            }, 600000); // 600000 (needs to be twice the inside setTimeout value)
        }

		// every time there is a click, this function runs. every time it runs it clears the timers so they are not running
		// anymore and are set back to the beginning. if this function is not called again for 5 minutes (the number in t's setTimeout)
		// the timeout will not be cleared and it'll hit the condition to run the function rotation.
		// this also corresponds to no clicks for 5 minutes
        function resetTimer() {
            clearInterval(openSwitch);
            clearTimeout(closeSwitch);
            clearTimeout(t);
            t = setTimeout(rotation, 300000);//300000
        }
    }
    idleTimer();

	// this little section is used to reset the localStorage when the app starts up
	// localStorage doesn't automatically clear between uses
	// waits one second so that everything can load before clearing localStorage otherwise it won't work
    function resetStart() {
        win.webContents.send('resetValues')
    }
    var t2 = setTimeout(resetStart, 1000);
}

// when app is ready, reads from the file to store the stuff previously on it in oldData to add it back on later
var oldData;
app.on('ready', () => {
    fs.readFile("analytics.txt", (err,data) => {
        if (err) throw err;
        data = data.toString();
        if (data.length > 0) {
            oldData = data.substr(1,data.length-2);
            fs.writeFile("analytics.txt", "", (err) => {
                if (err) throw err;
            })
        }
    })
    createWindow();
})

// when app quits, add old data back on if it exists and add some other formatting things to make it valid JSON
app.on('quit', () => {
    fs.readFile("analytics.txt", (err,data) => {
        if (err) throw err;
        data = data.toString();
        if (oldData) {
            data = "[" + oldData + "," + data.substr(0, data.length - 1) + "]";
        } else {
            data = "[" + data.substr(0, data.length - 1) + "]";
        }
        fs.writeFile("analytics.txt", data, (err) => {
            if (err) throw err;
        })
    })
})
