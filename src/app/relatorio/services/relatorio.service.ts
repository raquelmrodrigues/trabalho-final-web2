import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor() { }

  generateCliente() {
    const pdf = new jsPDF();
    pdf.text('Conteudo do Relatório dos clientes:', 10, 10);
    pdf.save('relatorio-cliente-pdf.pdf');
  }

  generateReceitas() {
    const pdf = new jsPDF();
    pdf.text('Conteudo do Relatório das Receitas:', 10, 10);
    pdf.save('relatorio-receitas-pdf.pdf');
  }

  generateClientesFieis() {
    const pdf = new jsPDF();
    pdf.text('Conteudo do Relatório dos clientes mais fieis:', 10, 10);
    pdf.save('relatorio-cliente-fiel-pdf.pdf');
  }
}
