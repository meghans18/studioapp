const ipcRenderer = require('electron').ipcRenderer;
document.addEventListener('click', function () {
	ipcRenderer.send('reset')
})