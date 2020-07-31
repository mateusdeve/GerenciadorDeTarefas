import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { TarefasService } from './../shared/tarefas.service';
import { Router } from '@angular/router';
import { Tarefa } from './../shared/tarefa.model';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa; 

  constructor(private tarefaService: TarefasService, private router: Router, @Inject(DOCUMENT) private document: Document) { }

    ngOnInit(): void {
      this.tarefa = new Tarefa();
    }

    cadastrar(): void{
      if(this.formTarefa.form.valid){
        this.tarefa.concluido = false;
        this.tarefaService.cadastrar(this.tarefa);
        this.router.navigate(['tarefas/listar']);
      }
    }

}
