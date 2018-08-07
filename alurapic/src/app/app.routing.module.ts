import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './home/signin/signin.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SingUpComponent } from './home/singup/singup.component';

const routes:Routes  = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
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

  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
