import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-selecionar-relatorio',
  templateUrl: './selecionar-relatorio.component.html',
  styleUrls: ['./selecionar-relatorio.component.css']
})

export class SelecionarRelatorioComponent implements OnInit {
  ngOnInit(): void {
  }

  generatePDF() {
    const pdf = new jsPDF();
    pdf.text('Conteudo do Relatório Escolhido:', 10, 10);
    pdf.save('relatorio-pdf.pdf');
  }
}






