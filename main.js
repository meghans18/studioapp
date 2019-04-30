const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const ipcMain = electron.ipcMain;
const fs = require("fs");

let win
function createWindow() {
	let win = new BrowserWindow({frame: false, fullscreen: true})
	win.loadFile('index.html')
	win.webContents.openDevTools()

    var pages = ['brinton/nowShowing.html', 'whitman/index.html']

    var t, openSwitch, closeSwitch;
    function idleTimer() {
        ipcMain.on('reset', () => {
            resetTimer();
        })

        var i = 0;
        function rotation() {
            win.loadFile('index.html')
            win.webContents.send('writeFile');
            win.webContents.send('resetValues');

            openSwitch = setInterval(function() {
                if (i >= pages.length) {
                    i = 0;
                }
                win.loadFile(pages[i]);
                i++;
                closeSwitch = setTimeout(function() {
                    win.loadFile('index.html');
                }, 5000);//300000
            }, 10000);//600000 (needs to be twice the inside setTimeout value)
        }

        function resetTimer() {
            clearInterval(openSwitch);
            clearTimeout(closeSwitch);
            clearTimeout(t);
            t = setTimeout(rotation, 10000);//300000
        }
    }
    idleTimer();

    function resetStart() {
        win.webContents.send('resetValues')
    }
    var t2 = setTimeout(resetStart, 1000);
}

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