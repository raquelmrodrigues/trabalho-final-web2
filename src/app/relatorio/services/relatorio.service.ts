import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RelatorioService { 
  constructor(private router: Router) { }

  /*generateCliente() {
    const pdf = new jsPDF();
    pdf.text('aaaaaaaaaaaaaaaaaaa', 10, 10);
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
  }*/

  generateClientePDF() {
    this.router.navigate(['relatorio/relatorioCliente']);

    setTimeout(() => {
      const doc = new jspdf.jsPDF();
      const htmlElement = document.getElementById('conteudo-para-pdf');
      (doc as any).autoTable({ html: htmlElement });
      doc.save('documento.pdf');
    }, 1000);
  }

  generateClientesFieisPDF() {
    this.router.navigate(['relatorio/relatorioFiel']);

    setTimeout(() => {
      const doc = new jspdf.jsPDF();
      const htmlElement = document.getElementById('conteudo-para-pdf');
      (doc as any).autoTable({ html: htmlElement });
      doc.save('documento.pdf');
    }, 1000); 
  }

  generateReceitasPDF() {
    this.router.navigate(['relatorio/relatorioReceita']);

    setTimeout(() => {
      const doc = new jspdf.jsPDF();
      const htmlElement = document.getElementById('conteudo-para-pdf');
      (doc as any).autoTable({ html: htmlElement });
      doc.save('documento.pdf');
    }, 1000);
  }

}
