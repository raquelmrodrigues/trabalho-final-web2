import { Component, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/shared/models/item-pedido';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { Pedido } from 'src/app/shared/models/pedido';
import { StatusPedido } from 'src/app/shared/models/status-pedido';

@Component({
  selector: 'app-orcamento-cliente',
  templateUrl: './orcamento-cliente.component.html',
  styleUrls: ['./orcamento-cliente.component.css']
})
export class OrcamentoClienteComponent implements OnInit{
  itens: ItemPedido[] = [];
  pedido: Pedido = new Pedido(7, new Date() , undefined, undefined,  0);
 
  ngOnInit(): void{
    this.pedido = this.PedidoExemplo();
    this.itens = this.listarItens();
    }


  listarItens(): ItemPedido [] {
    return[
    new ItemPedido(123546123, 1,new Manutencao (54, 'Calça', 15,3) ,5),
    new ItemPedido(123546123, 2,new Manutencao (56, 'Terno', 30,4),1),
    new ItemPedido(123546123, 3,new Manutencao (10, 'Camisa', 20,2),2),
  ];}

  PedidoExemplo(): Pedido {
    return new Pedido(123546123, new Date(2023, 0, 23, 10, 50, 13), StatusPedido.PAGO, this.listarItens(), 145);
  }
}
