const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path"); 

let win: any = null;
const createWindow:any = ()=>{
  win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  win.on('closed', ()=>{
    win = null;
  });
};
try {
  app.on('ready', createWindow);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    };
  });
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    };
  });
} catch (error) {
    throw new Error("Unavailable");
}