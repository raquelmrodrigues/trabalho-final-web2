import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})

export class EditarFuncionarioComponent implements OnInit {
  @ViewChild("formFuncionario") formFuncionario!: NgForm;
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.funcionarioService.buscarPorIdFuncionario(id);
    if (res !== undefined)
      this.funcionario = res;
    else
      throw new Error("Funcionário não encontrado: id = " + id);
  }

  atualizar(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.atualizarFuncionario(this.funcionario);
      this.router.navigate(['/funcionarios/listarFuncionarios']);
    }
  }

}
