import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../services/relatorio.service';

@Component({
  selector: 'app-selecionar-relatorio',
  templateUrl: './selecionar-relatorio.component.html',
  styleUrls: ['./selecionar-relatorio.component.css']
})

export class SelecionarRelatorioComponent implements OnInit {
    constructor(private relatorioService : RelatorioService) {}

    gerarRelatorio(id:string) {
      switch(id) {
        case "clientes" : this.relatorioService.generateClientePDF();
        break;
        case "receitas" : this.relatorioService.generateReceitasPDF();
        break;
        case "clientesFieis" : this.relatorioService.generateClientesFieisPDF();
        break;
        default : alert("Relatório Inválido!");
      }
    }

  ngOnInit(): void {
  }

}






