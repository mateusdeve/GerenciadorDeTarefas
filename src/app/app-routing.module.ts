import { TarefasRoute } from './tarefas/tarefas.routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefasRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
