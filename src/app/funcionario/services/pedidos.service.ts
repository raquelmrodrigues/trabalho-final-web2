import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido';

const LS_KEY: string = "pedidos";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  listarPedidos(): Pedido[]{
    const pedidos = localStorage[LS_KEY];

    return pedidos ? JSON.parse(pedidos) : [];
  }
  buscarPorId(id: number): Pedido | undefined {
    const pedidos: Pedido[] = this.listarPedidos();
    return pedidos.find(pedido => pedido.id === id);
  }
  atualizar(pedido: Pedido): void {
    const pedidos: Pedido[] = this.listarPedidos();

    pedidos.forEach((obj,index,objs) => {
      if (pedido.id === obj.id ) {
        objs[index] = pedido
      }
    });

    localStorage[LS_KEY] = JSON.stringify(pedidos);
  }
}
