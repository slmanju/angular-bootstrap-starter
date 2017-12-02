import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './app-bootstrapcss.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    [BrowserModule, AppBootstrapModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
