import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-selecionar-relatorio',
  templateUrl: './selecionar-relatorio.component.html',
  styleUrls: ['./selecionar-relatorio.component.css']
})

export class SelecionarRelatorioComponent {
  ngOnInit(): void {
  }

  generatePDF() {
    const pdf = new jsPDF(); // Crie um novo objeto jsPDF
    pdf.text('Hello world!', 10, 10); // Exemplo de como adicionar texto ao PDF
    pdf.save('meu-arquivo-pdf.pdf'); // Nome do arquivo PDF gerado
  }
}






