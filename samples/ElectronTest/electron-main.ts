import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;
const args: any = process.argv.slice(1);
const serve: any = args.some((val) => val === '--serve');

const createWindow: any = () => {
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 900,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve) ? true : false,
    }
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: path.join(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  if (serve) {
    win.webContents.openDevTools();
  }

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