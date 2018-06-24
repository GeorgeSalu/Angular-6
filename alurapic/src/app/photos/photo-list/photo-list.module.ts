import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [CommonModule, PhotoModule]
})
export class PhotoListModule {}
