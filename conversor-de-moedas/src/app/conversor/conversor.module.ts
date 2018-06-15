import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ConversorComponent],
  exports: [
  	ConversorComponent
  ],
  providers: [
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
