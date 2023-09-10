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
  inserir(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.inserirFuncionario(this.funcionario);
      this.router.navigate(["funcionario/listarFuncionario"]);
    }
  }
}
