import { ipcMain } from "electron";
import { file } from "../file/file";
import { Hash } from "crypto";

ipcMain.on('server:read-file', (event, arg: Hash) => {
  let readFile = readFile(arg)
  event.sender.send('client:read-file', readFile)
});