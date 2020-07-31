import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { TarefasService } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefasComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({ 
  declarations: [ListarTarefasComponent, CadastrarComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,

  ],
  providers: [
    TarefasService
  ],
})

export class TarefasModule { }
