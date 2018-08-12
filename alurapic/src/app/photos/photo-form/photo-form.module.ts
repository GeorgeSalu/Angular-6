import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { ImmediateClickModule } from '../../shared/directive/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      VMessageModule,
      FormsModule,
      RouterModule,
      PhotoModule,
      ImmediateClickModule
  ]
})
export class PhotoFormModule {

}
