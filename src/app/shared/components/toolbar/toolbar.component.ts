import { ElectronService } from './../../services/electron/electron.service';
import { Component } from '@angular/core';

@Component({
  selector: 'layla-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  constructor(private electronService: ElectronService) {}
}
