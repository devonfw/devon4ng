const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path"); 

let win = null;
// const args = process.argv.slice(1);
// const serve = args.some(val => val === '--serve');

const createWindow = ()=>{
  win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      //allowRunningInsecureContent: (serve) ? true : false
    }
  });

  //win.webContents.openDevTools();

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
  app.allowRendererProcessReuse = true;
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