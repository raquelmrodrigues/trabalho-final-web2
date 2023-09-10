import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataNascComponent } from '../data-nasc/data-nasc.component';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})

export class EditarFuncionarioComponent implements OnInit {
  @ViewChild("formFuncionario") formFuncionario!: NgForm;
  funcionario!: Funcionario;
  selectedDateRange: Date | null = null;
  private dateRangeModal: NgbModalRef | null = null;

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.funcionarioService.buscarPorIdFuncionario(id);
    if (res !== undefined)
      this.funcionario = res;
    else
      throw new Error("Funcionário não encontrado: id = " + id);
  }
  openDateRangePickerModal() {
    this.dateRangeModal = this.modalService.open(DataNascComponent);
    this.dateRangeModal.componentInstance.dateRangeSelected.subscribe(
      (date: Date) => {
        this.selectedDateRange = date;
      }
    );
  }

  atualizar(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.atualizarFuncionario(this.funcionario);
      this.router.navigate(['/funcionario/listarFuncionario']);
    }
  }

}
