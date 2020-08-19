import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ViewRoutingModule } from './view-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    ViewRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class ViewModule { }
