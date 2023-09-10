import { Component, OnInit } from '@angular/core';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css'],
})
export class ListarPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(
  ) {}

  ngOnInit(): void {
    this.pedidos = this.listarPedidos();
    console.log(this.pedidos);
  }
  listarPedidos(): Pedido[] {
    return [
        new Pedido(123546123,15,5,2020, new Date(), StatusPedido.PAGO),
        new Pedido(123573, 30, 8, 2022, new Date(), StatusPedido.RECOLHIDO),
        new Pedido(121233,23,12,2023, new Date(), StatusPedido.ABERTO),
        new Pedido(5431233, 3, 10,2021, new Date(), StatusPedido.CANCELADO),
        new Pedido(117651233, 12, 2, 2023, new Date(), StatusPedido.REJEITADO),
        new Pedido(16573, 25, 4, 2023, new Date(), StatusPedido.AGUARDANDO),
        new Pedido(15671233,29, 11, 2022, new Date(), StatusPedido.FINALIZADO),
        new Pedido(1256733,2, 9, 2023, new Date(), StatusPedido.ABERTO)
      //Testes de pedidos.
    ];
  }
}
