import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from 'src/app/shared/models/pedido';
import { Observable } from 'rxjs';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private backendURL = 'http://localhost:8081';

  constructor(
    private http: HttpClient
  ) { }
  listarPedidos(): Observable<Pedido []> {
    return this.http.get<Pedido []>(`${this.backendURL}/pedidos`);
  }


  setStatusPedido(pedidos: Pedido[]) {
    pedidos.forEach(pedidos => {
      const statusId = pedidos.statuspedido;
      console.log(statusId);
      if (statusId !== undefined) {
      const statusPedido = getStatusPedidoById(statusId);
      pedidos.status = statusPedido;
    }
      function getStatusPedidoById(id: number): StatusPedido | undefined {
        switch (id) {
            case 1: return StatusPedido.ABERTO;
            case 2: return StatusPedido.REJEITADO;
            case 3: return StatusPedido.CANCELADO;
            case 4: return StatusPedido.RECOLHIDO;
            case 5: return StatusPedido.AGUARDANDO;
            case 6: return StatusPedido.PAGO;
            case 7: return StatusPedido.FINALIZADO;
            default: return undefined;
        }
    }
  });
  }
}
