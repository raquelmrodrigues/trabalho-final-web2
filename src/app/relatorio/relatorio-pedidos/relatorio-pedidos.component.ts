import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-relatorio-pedidos',
  templateUrl: './relatorio-pedidos.component.html',
  styleUrls: ['./relatorio-pedidos.component.css']
})
export class RelatorioPedidosComponent implements OnInit {
  ngOnInit(): void {
  }

  generatePDF() {
    const pdf = new jsPDF();
    pdf.text('Relatório de Pedidos', 10, 10);
    pdf.save('relatorio-pedidos-pdf.pdf');
  }
}
