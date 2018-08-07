import { HomeRoutingModule } from './home.routing.module';
import { SingUpComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ SignInComponent, SingUpComponent, HomeComponent ],
  imports: [ReactiveFormsModule, FormsModule ,CommonModule, VMessageModule, RouterModule, HomeRoutingModule]
})
export class HomeModule {}
