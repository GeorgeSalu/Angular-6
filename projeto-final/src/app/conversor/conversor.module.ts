import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes/data-br.pipe';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from './conversor-routing.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ConversorRoutingModule
  ],
  declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent, DataBrPipe, ConversorRoutingComponent],
  exports: [
  	ConversorComponent
  ],
  providers: [
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
