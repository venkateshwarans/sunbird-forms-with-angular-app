import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonFormElementsModule } from 'common-form-elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonFormElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
