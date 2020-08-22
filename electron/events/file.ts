import { ipcMain } from "electron";
import { file } from "../file/file";

ipcMain.on('server:read-file', (event, arg) => {
  let readFile = file()
  event.sender.send('client:read-file', readFile)
});