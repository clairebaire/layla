import { app, BrowserWindow } from 'electron'
import * as path from 'path';
import * as url from 'url';

let win;
function createWindow() {
  win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "../../dist/index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// File Handling
require('./file/file')

// Database Handling
require('./db')