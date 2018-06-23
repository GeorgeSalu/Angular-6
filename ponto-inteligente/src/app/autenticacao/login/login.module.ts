import { LogarComponent } from './components/logar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoginComponent, LogarComponent]
})
export class LoginModule { }
