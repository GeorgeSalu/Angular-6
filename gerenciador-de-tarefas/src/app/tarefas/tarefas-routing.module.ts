import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastarTarefaComponent } from './cadastar';

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
	}
];