import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario!: Usuario ;

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.funcionario = new Usuario ();
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
