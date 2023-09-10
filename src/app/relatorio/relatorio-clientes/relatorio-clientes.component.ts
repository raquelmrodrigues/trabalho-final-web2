import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientesComponent implements OnInit {
  ngOnInit(): void {
  }

  generatePDF() {
    const pdf = new jsPDF(); // Crie um novo objeto jsPDF
    pdf.text('Relatório de Clientes', 10, 10); // Exemplo de como adicionar texto ao PDF
    pdf.save('relatorio-clientes-pdf.pdf'); // Nome do arquivo PDF gerado
  }
}
