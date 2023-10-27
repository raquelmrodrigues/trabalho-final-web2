import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
  }
  inserirFuncionario(): void {
    this.funcionario.perfil = "FUNC"
    this.funcionarioService.inserirFuncionario(this.funcionario)
      .subscribe(
        response => {
          console.log('Funcionario inserido com sucesso', response);
        },
        error => {
          console.error('Erro ao inserir funcionario:', error);
        }
      );
  }

}
