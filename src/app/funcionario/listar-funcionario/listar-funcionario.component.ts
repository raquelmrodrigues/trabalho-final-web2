import { Component, OnInit } from '@angular/core';

import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

funcionarios:Funcionario[] = [];

constructor(private crudfuncionario : CrudFuncionarioService){}

ngOnInit():void{
 this.funcionarios = this.listarTodos();
 console.log(this.funcionarios);
}

listarTodos(): Funcionario[] {
  return this.crudfuncionario.listarFuncionario();
}

remover($event: any, funcionario: Funcionario): void {
  $event.preventDefault();
  if (confirm(`Deseja realmente remover a pessoa ${funcionario.nome}?`)) {
  this.crudfuncionario.removerFuncionario(funcionario.id!);
  this.funcionarios = this.listarTodos();
  }
  }

}
