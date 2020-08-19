import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ElectronService } from './services/electron/electron.service';
import { FooterComponent } from './landmarks/footer/footer.component';
import { HeaderComponent } from './landmarks/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [CommonModule],
  providers: [ElectronService],
  exports: [HeaderComponent, FooterComponent, ToolbarComponent]
})
export class SharedModule { }
