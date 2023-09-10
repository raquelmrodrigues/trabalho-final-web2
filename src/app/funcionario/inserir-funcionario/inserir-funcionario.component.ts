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
<<<<<<< HEAD
  selectedDateRange: Date | null = null;
  
=======
>>>>>>> a348bbe71050df651e87df76533a27aae23e099f

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
  }
<<<<<<< HEAD
  
=======
>>>>>>> a348bbe71050df651e87df76533a27aae23e099f
  inserir(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.inserirFuncionario(this.funcionario);
      this.router.navigate(["funcionario/listarFuncionario"]);
    }
  }
}
