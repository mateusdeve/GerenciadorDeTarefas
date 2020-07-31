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

    this.afazer = this.listarAfazer();

    this.concluidos = this.listarConcluidos();
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

  remover(id: number): void{
    this.tarefaService.remover(id);
    this.ngOnInit();
  }

}
