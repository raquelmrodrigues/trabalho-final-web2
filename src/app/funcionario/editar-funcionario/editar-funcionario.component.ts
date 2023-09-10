import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
<<<<<<< HEAD
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
=======

>>>>>>> a348bbe71050df651e87df76533a27aae23e099f
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
    private router: Router,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.funcionarioService.buscarPorIdFuncionario(id);
    if (res !== undefined)
      this.funcionario = res;
    else
      throw new Error("Funcionário não encontrado: id = " + id);
  }
<<<<<<< HEAD
  
=======
>>>>>>> a348bbe71050df651e87df76533a27aae23e099f

  atualizar(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.atualizarFuncionario(this.funcionario);
      this.router.navigate(['/funcionario/listarFuncionario']);
    }
  }

}
