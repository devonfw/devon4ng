"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
var args = process.argv.slice(1);
var serve = args.some(function (val) { return val === '--serve'; });
var createWindow = function () {
    win = new electron_1.BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    });
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        win.loadURL('http://localhost:4200');
    }
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    if (serve) {
        win.webContents.openDevTools();
    }
    win.on('closed', function () {
        win = null;
    });
};
try {
    electron_1.app.on('ready', createWindow);
    electron_1.app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
        ;
    });
    electron_1.app.on('activate', function () {
        if (win === null) {
            createWindow();
        }
        ;
    });
}
catch (error) {
    throw new Error("Unavailable");
}
//# sourceMappingURL=main.js.map