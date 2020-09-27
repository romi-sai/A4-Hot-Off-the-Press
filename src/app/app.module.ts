import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmailChangeComponent } from './email-change/email-change.component';
import { PwChangeComponent } from './pw-change/pw-change.component';
import { UsernameChangeComponent } from './username-change/username-change.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmailChangeComponent, PwChangeComponent, UsernameChangeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
