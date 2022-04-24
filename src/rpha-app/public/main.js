const { app, BrowserWindow } = require('electron');

require('@electron/remote/main').initialize();

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1024,
      height: 600,
      webPreferences: {
          enableRemoteModule: true
      }
    })
  
    win.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
    createWindow()
})