import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';
import { HttpClientModule } from '@angular/common/http';
import { NumeroDirective } from './conversor/directives/numero.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumeroDirective
  ],
  imports: [
    BrowserModule,
    ConversorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
