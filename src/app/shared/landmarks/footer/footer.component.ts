import { ElectronService } from './../../services/electron/electron.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layla-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private electronService: ElectronService) {}
}
