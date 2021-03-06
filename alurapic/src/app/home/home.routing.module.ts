import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignInComponent } from './signin/signin.component';
import { SingUpComponent } from './singup/singup.component';
import { LoginGuard } from '../core/auth/login.guard';

const routes:Routes  = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'singup',
        component: SingUpComponent
      },
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}
