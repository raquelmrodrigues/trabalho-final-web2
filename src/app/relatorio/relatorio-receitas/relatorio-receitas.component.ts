import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-relatorio-receitas',
  templateUrl: './relatorio-receitas.component.html',
  styleUrls: ['./relatorio-receitas.component.css']
})
export class RelatorioReceitasComponent implements OnInit {
  ngOnInit(): void {
  }

  generatePDF() {
    const pdf = new jsPDF();
    pdf.text('Relatório de Receitas', 10, 10);
    pdf.save('relatorio-receitas-pdf.pdf');
  }
}
