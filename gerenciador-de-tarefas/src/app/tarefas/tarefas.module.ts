import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastarTarefaComponent } from './cadastar';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	ListarTarefaComponent, 
  	CadastarTarefaComponent, 
  	EditarTarefaComponent,
  	TarefaConcluidaDirective
  ],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
