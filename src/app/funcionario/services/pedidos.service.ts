import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  listarPedidosporIDCliente(clienteID: number | undefined): Observable<Pedido []> {
    return this.http.get<Pedido []>(`${this.backendURL}/pedidosCliente/${clienteID}`);
  }
  listarPedidosporID(pedidoID: any): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.backendURL}/pedidos/${pedidoID}`)
  }

  alterarPedidos(pedido: Pedido): Observable<Pedido> {
    const pedidoJSON = JSON.stringify(pedido);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Pedido>(`${this.backendURL}/pedidos/${pedido.id}`, pedidoJSON, { headers})
  }

  setSomaDePrazos(pedido: Pedido){
    let soma = 0
    pedido.itens?.forEach(pedido => {
      const prazos = pedido.roupa?.prazo;
      if (prazos !== undefined) {
        soma += prazos;
      }
    })
    pedido.prazoServico = soma
  }
  setSomaDePrecos(pedido: Pedido) {
    let total = 0
    let mult = 0
    console.log(pedido)
    pedido.itens?.forEach(pedido => {
      const precoUnt = pedido.roupa?.preco;
      if(precoUnt !== undefined && pedido.quantidade !== undefined){
        mult = precoUnt * pedido.quantidade
        console.log("socorro", mult)
        total += mult;
        console.log("socorro", total);
      }
    })
    pedido.valorTotal = total;
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