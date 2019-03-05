const electron = require('electron')
const {app, BrowserWindow} = require('electron')

function createWindow() {
	let win = new BrowserWindow({frame: false, fullscreen: true})
	win.loadFile('index.html')
	//win.webContents.openDevTools()
}

app.on('ready', createWindow)
