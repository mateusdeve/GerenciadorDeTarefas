import {  TarefasService, Tarefa } from './../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];
  concluidos: Tarefa[];
  afazer: Tarefa[];

  constructor( private tarefaService: TarefasService  ) { }

  ngOnInit(): void {

    this.concluidos = [
      new Tarefa(1, 'Concluido', 'testando o cara', true),
      new Tarefa(2, 'Concluido2', 'testando o cara2', true),
    ];

    this.afazer = [
      new Tarefa(3, 'A fazer', 'testando o cara', false),
    ];

  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  listarConcluidos(): Tarefa[]{
    return this.tarefaService.listarConcluidos();
  }

  listarAfazer(): Tarefa[]{
    return this.tarefaService.listarAfazer();
  }

}
