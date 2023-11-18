import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/autenticacao/services/login.service';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-pedidos-cliente',
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.css']
})
export class PedidosClienteComponent implements OnInit {
  currentDate: Date | undefined;
  totalQuantidade: number = 0;

  constructor(private pedidosService: PedidosService,
              private loginService: LoginService
              ) {

  }
  ngOnInit() {
    this.pedidosService.listarPedidosporID(this.usuarioLogado?.id);
    this.currentDate = new Date();
  }

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
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
