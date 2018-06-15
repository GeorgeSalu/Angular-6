import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent],
  exports: [
  	ConversorComponent
  ],
  providers: [
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
