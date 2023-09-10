import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
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
        case "clientes" : this.relatorioService.generateCliente();
        break;
        case "receitas" : this.relatorioService.generateReceitas();
        break;
        case "clientesFieis" : this.relatorioService.generateClientesFieis();
        break;
        default : alert("Relatório Inválido!");
      }
      
      
      

    }

  ngOnInit(): void {
  }

}






