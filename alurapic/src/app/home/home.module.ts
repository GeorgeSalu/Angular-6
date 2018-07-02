import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SignInComponent ],
  imports: [ReactiveFormsModule, CommonModule, VMessageModule]
})
export class HomeModule {}
