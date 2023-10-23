import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-cliente',
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.css']
})
export class PedidosClienteComponent implements OnInit {
  currentDate: Date | undefined;
  totalQuantidade: number = 0;
  
  ngOnInit() {
    this.currentDate = new Date();
  }

  adicionarItem() {
    const selecionado = (<HTMLSelectElement>document.getElementById("selecionarOpcao"));
    const valorSelecionado = selecionado.options[selecionado.selectedIndex].text;
    const tabela = (<HTMLTableElement>document.getElementById("tabela")).getElementsByTagName('tbody')[0];
    const linhas = tabela.getElementsByTagName('tr');
    let itemExistente = false;

    for (let i = 0; i < linhas.length; i++) {
      const celulas = linhas[i].getElementsByTagName('td');
      if (celulas.length > 0 && celulas[0].innerHTML === valorSelecionado) {
        const quantidade = parseInt(celulas[1].innerHTML) + 1;
        celulas[1].innerHTML = quantidade.toString();
        itemExistente = true;
        break;
      }
    }

    if (!itemExistente) {
      const novaLinha = tabela.insertRow(tabela.rows.length);
      const celulaItem = novaLinha.insertCell(0);
      const celulaQuantidade = novaLinha.insertCell(1);
      celulaItem.innerHTML = valorSelecionado;
      celulaQuantidade.innerHTML = '1';
    }
    this.calcularSomaTotal();
  }

  calcularSomaTotal() {
    const tabela = (<HTMLTableElement>document.getElementById("tabela")).getElementsByTagName('tbody')[0];
    const linhas = tabela.getElementsByTagName('tr');
    let soma = 0;

    for (let i = 0; i < linhas.length; i++) {
      const celulas = linhas[i].getElementsByTagName('td');
      if (celulas.length > 1) {
        const quantidade = parseInt(celulas[1].innerHTML);
        soma += quantidade;
      }
    }

    this.totalQuantidade = soma;
  }
}
