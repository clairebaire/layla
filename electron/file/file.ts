import { ipcMain } from "electron";
import * as fs from 'fs';

ipcMain.on('to-server', (event, arg) => {
  fs.readFile('tsconfig.json', 'utf8', (err, item) => {
    if (err) throw err;
    event.sender.send('to-client', item);
  });
});