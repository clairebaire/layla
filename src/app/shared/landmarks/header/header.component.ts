import { ElectronService } from './../../services/electron/electron.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'layla-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = "layla"

  constructor(private electronService: ElectronService) {}
}
