
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { LoginModule, LoginRoutingModule, CadastroPjModule, CadastroPjRoutingModule, CadastroPfModule } from './autenticacao';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
