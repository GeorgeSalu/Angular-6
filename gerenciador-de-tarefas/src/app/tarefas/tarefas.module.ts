import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastarTarefaComponent } from './cadastar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ListarTarefaComponent, CadastarTarefaComponent],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
