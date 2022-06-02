import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbstractComponentComponent } from './abstract-component/abstract-component.component';
import { SpecifiedComponentAComponent } from './abstract-component/specified-component-a/specified-component-a.component';
import { SpecifiedComponentBComponent } from './abstract-component/specified-component-b/specified-component-b.component';

@NgModule({
  declarations: [
    AppComponent,
    AbstractComponentComponent,
    SpecifiedComponentAComponent,
    SpecifiedComponentBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
