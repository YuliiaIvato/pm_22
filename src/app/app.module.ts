import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
// import { RouterOutlet } from '@angular/router';
//RouterOutlet
@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [ AppComponent ],
  exports: [ ],
  providers: [ ]
})
export class AppModule { }

