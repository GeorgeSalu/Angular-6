import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastarTarefaComponent } from './cadastar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
	{
		path: 'tarefas',
		redirectTo: 'tarefas/listar'
	},
	{
		path: 'tarefas/listar',
		component: ListarTarefaComponent
	},
	{
		path: 'tarefas/cadastrar',
		component: CadastarTarefaComponent
	},
	{
		path: 'tarefas/editar/:id',
		component: EditarTarefaComponent
	}
];