import { Component, OnInit } from '@angular/core';
import { ElectronService } from './shared/services/electron/electron.service';

@Component({
  selector: 'layla-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'layla';

  constructor(private electronService: ElectronService) {}

  ngOnInit() {
   this.electronService.ipcRenderer.send('to-server', 'hi');
   this.electronService.ipcRenderer.on('to-client',  (event, arg) => {
      console.log(arg);
    });
  }
}
