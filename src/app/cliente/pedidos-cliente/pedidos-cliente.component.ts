import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/autenticacao/services/login.service';
import { CrudFuncionarioService } from 'src/app/funcionario/services/crud-funcionario.service';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Manutencao } from '../../shared/models/manutencao.model';
import { ItemPedido } from 'src/app/shared/models/item-pedido';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-pedidos-cliente',
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.css']
})
export class PedidosClienteComponent implements OnInit {
  itensPedido: ItemPedido = new ItemPedido
  pedido: Pedido = new Pedido

  manutencao: Manutencao[] = []
  currentDate: Date | undefined;
  totalQuantidade: number = 0;

  constructor(private pedidosService: PedidosService,
              private loginService: LoginService,
              private roupasService: CrudFuncionarioService
              ) {

  }
  ngOnInit() {
    this.roupasService.listarManutencao().subscribe(
      manutencao => {
        this.manutencao = manutencao;
      }
    )
    this.currentDate = new Date();
  }

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }

  adicionarItem() {
    const selecionado = <HTMLSelectElement>document.getElementById("selecionarOpcao");
    const valorSelecionado = selecionado.options[selecionado.selectedIndex].text;
    const selectedManutencao = this.manutencao.find(manutencao => manutencao.peca === valorSelecionado);
    this.itensPedido.roupa = selectedManutencao

    if (!this.pedido.itens) {
      this.pedido.itens = [];
    }
    const existingItem = this.pedido.itens.find(item => item.roupa === selectedManutencao);

    if (existingItem ) {
      existingItem.quantidade= (existingItem.quantidade || 0) + 1;
    } else {
      this.itensPedido.quantidade = 1
      const newItemPedido: ItemPedido = { ...this.itensPedido };
      this.pedido.itens.push(newItemPedido);
    }
  }

  somarTotal() {
    const pedido = this.pedido;
    let valorTotal = 0;
    let precoItem = 0

    if (pedido && pedido.itens) {
      for (let item of pedido.itens) {
        if (item.roupa && typeof item.roupa.preco === 'number' && item.quantidade) {
          precoItem = item.roupa.preco * item.quantidade;
          valorTotal += precoItem;
        }
      }
    }
    return valorTotal;
  }

  confirmarPedido(){
  this.pedido.usuario = this.pedido.usuario ?? {};
  this.pedido.usuario.id = this.usuarioLogado?.id;
  this.pedido.datadopedido = this.currentDate;
  this.pedido.statuspedido = 1;


  console.log(this.pedido)
  this.pedidosService.cadastrarPedido(this.pedido).subscribe(
    response => {
      console.log('socorro', response)
    }
  )


   // [routerLink]="['/cliente/orcamentoCliente']"

  }






}
