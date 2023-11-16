import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataComponent } from 'src/app/funcionario/data/data.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pedidos-cliente',
  templateUrl: './listar-pedidos-cliente.component.html',
  styleUrls: ['./listar-pedidos-cliente.component.css']
})
export class ListarPedidosClienteComponent implements OnInit{
  statusPedido = StatusPedido;
  pedidos: Pedido[] = [];
  selectedFilterOption: string = '';
  selectedDateRange: Date[] = [];
  private dateRangeModal: NgbModalRef | null = null;

  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef, private router: Router) {}


  ngOnInit(): void {
  /*  this.pedidos = this.listarPedidos();
    this.pedidos.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateA - dateB;
    });
    */
  }

/*  filterPeriodo(dateRange: Date[]) {
    if (dateRange.length === 2) {
      this.pedidos = this.pedidos.filter((pedido) => {
        const pedidoDate = pedido.date ? new Date(pedido.date) : null;
        if (pedidoDate) {
          return pedidoDate >= dateRange[0] && pedidoDate <= dateRange[1];
        }
        return false;
      });
    }
  }
  filtroStatus(status: string) {
    switch(status){
      case 'Aberto': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;
      }
      case 'Rejeitado': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;

      }
      case 'Cancelado': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;

      }
      case 'Recolhido': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;

      }
      case 'Aguardando Pagamento': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;

      }
      case 'Pago': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;

      }
      case 'Finalizado': {
        const pedidos = this.listarPedidos();
        this.pedidos = pedidos.filter((pedido) => {
          return pedido.status?.Status === status;
        });
        return pedidos;

      }
      default: {
        return console.log("Erro");
      }
    }
  }

  filterPedidos(option: string) {
    this.selectedFilterOption = option;

    if (option === 'Pedidos de Hoje') {
      this.pedidos = this.pedidos.filter((pedido) => {
        const hoje = new Date();
        const dataPedido = pedido.date ? new Date(pedido.date) : null;
        return (
          dataPedido &&
          dataPedido.getDate() === hoje.getDate() &&
          dataPedido.getMonth() === hoje.getMonth() &&
          dataPedido.getFullYear() === hoje.getFullYear()
        );
      });
    } else if (option === 'Todos os Pedidos') {
      this.pedidos = this.listarPedidos();
      this.pedidos.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateA - dateB;
      });
    }
  }

  listarPedidos(): Pedido[] {
    return [
      new Pedido(123546123, new Date(), StatusPedido.PAGO),
      new Pedido(
        123573,
        new Date(2022, 5, 14, 20, 33, 45),
        StatusPedido.RECOLHIDO
      ),
      new Pedido(121233, new Date(2023, 2, 3, 15, 54, 32), StatusPedido.ABERTO),
      new Pedido(
        5431233,
        new Date(2023, 0, 23, 10, 50, 13),
        StatusPedido.CANCELADO
      ),
      new Pedido(
        117651233,
        new Date(2023, 11, 20, 8, 3, 32),
        StatusPedido.REJEITADO
      ),
      new Pedido(
        16573,
        new Date(2023, 9, 29, 6, 12, 49),
        StatusPedido.AGUARDANDO
      ),
      new Pedido(
        15671233,
        new Date(2023, 5, 22, 19, 3, 11),
        StatusPedido.FINALIZADO
      ),
      new Pedido(1256733, new Date(2023, 2, 8, 9, 15, 55), StatusPedido.ABERTO),
      //Testes de pedidos.
    ];
  }

  consultaPorNumero() {
    console.log("antes");
    this.router.navigate(['/cliente/consultarPedido']);
    console.log("depois");
  }
*/
}
