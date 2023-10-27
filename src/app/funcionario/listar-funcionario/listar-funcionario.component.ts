import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

funcionarios:Funcionario[] = [];

constructor(private funcionarioService : CrudFuncionarioService,
            private router: Router){}

ngOnInit(): void {
  this.listarFuncionarios().subscribe(
    funcionarios => {
      this.funcionarios = funcionarios;
    },
    error => {
      console.error('Error:', error);
    }
  );
}

listarFuncionarios(): Observable<Funcionario[]> {
  return this.funcionarioService.listarFuncionario();
}
remover(funcionario: Funcionario, i: number): void {
  const confirmar = window.confirm(`Tem certeza de que deseja remover o funcionário ${funcionario.nome}?`);

  if (confirmar) {
    this.funcionarioService.removerFuncionario(funcionario).subscribe(() => {
      this.listarFuncionarios().subscribe(
        funcionarios => {
          this.funcionarios = funcionarios;
        },
        error => {
          console.error('Error:', error);
        }
      );
    });
  }
}



}
