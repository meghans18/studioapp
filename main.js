const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const ipcMain = electron.ipcMain;

let win, projWin
function createWindow() {
	win = new BrowserWindow({frame: false, fullscreen: true})
	win.loadFile('index.html')
	win.webContents.openDevTools()
}

app.on('ready', createWindow)

var pages = ['brinton/nowShowing.html', 'whitman/index.html']

var t, openSwitch, closeSwitch;
function idleTimer() {
	ipcMain.on('reset', () => {
		resetTimer();
	})
	
	var i = 0;
	function rotation() {
		win.loadFile('index.html')
		openSwitch = setInterval(function() {
			if (i >= pages.length) {
				i = 0;
			}
			win.loadFile(pages[i]);
			i++;
			closeSwitch = setTimeout(function() {
				win.loadFile('index.html');
			}, 300000);//300000
		}, 600000);//600000 (needs to be twice the inside setTimeout value)
	}
	
	function resetTimer() {
		clearInterval(openSwitch);
		clearTimeout(closeSwitch);
		clearTimeout(t);
		t = setTimeout(rotation, 300000);//300000
	}
}
idleTimer();