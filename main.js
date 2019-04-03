const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const createWindow = function() {
  console.log("start :v");
  mainWindow = new BrowserWindow({
    width: 960,
    height: 640,
    backgroundColor: "#FFF",
    frame: true,
    resizable: true,
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    nodeIntegration: true,
    webPreferences: {
      nodeIntegration: false
    }
  });
  mainWindow.loadURL(`file://${__dirname}/src/html/qian.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
};

app.on("ready", createWindow);
app.on("window-all-closed", app.quit);
