import { ListarTarefasComponent } from './listar';
import { Routes, RouterModule } from '@angular/router';

export const TarefasRoute: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent,
    }
];

