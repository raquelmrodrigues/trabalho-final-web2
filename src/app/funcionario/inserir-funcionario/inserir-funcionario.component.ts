import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataNascComponent } from '../data-nasc/data-nasc.component';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario!: Funcionario;
  selectedDateRange: Date | null = null;
  private dateRangeModal: NgbModalRef | null = null;

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
  }
  openDateRangePickerModal() {
    this.dateRangeModal = this.modalService.open(DataNascComponent);
    this.dateRangeModal.componentInstance.dateRangeSelected.subscribe(
      (date: Date) => {
        this.selectedDateRange = date;
      }
    );
  }
  inserir(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.inserirFuncionario(this.funcionario);
      this.router.navigate(["funcionario/listarFuncionario"]);
    }
  }
}
