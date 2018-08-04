import { SingUpComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SignInComponent, SingUpComponent ],
  imports: [ReactiveFormsModule, FormsModule ,CommonModule, VMessageModule, RouterModule]
})
export class HomeModule {}
