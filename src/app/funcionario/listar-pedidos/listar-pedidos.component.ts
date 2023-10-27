import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css'],
})
export class ListarPedidosComponent implements OnInit {
  statusPedido = StatusPedido;
  pedidos: Pedido[] = [new Pedido(123546123, new Date(), StatusPedido.PAGO),
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
    new Pedido(1256733, new Date(2023, 2, 8, 9, 15, 55), StatusPedido.ABERTO)
  ];
  selectedFilterOption: string = '';
  selectedDateRange: Date[] = [];
  private dateRangeModal: NgbModalRef | null = null;

  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.pedidos = this.listarPedidos();
    this.pedidos.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateA - dateB;
    });
  }
  openDateRangePickerModal() {
    this.dateRangeModal = this.modalService.open(DataComponent);
    this.dateRangeModal.componentInstance.dateRangeSelected.subscribe(
      (dates: Date[]) => {
        this.selectedDateRange = dates;
        this.filterPeriodo(this.selectedDateRange);
      }
    );

    this.dateRangeModal.hidden.subscribe(() => {
      if (this.dateRangeModal) {
        this.dateRangeModal.close();
        this.dateRangeModal = null;
      }
    });
  }
  filterPeriodo(dateRange: Date[]) {
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
  AlterarStatus(novoStatus: StatusPedido, numeroPedido: number) {
    const pedidos = this.pedidos;
    const pedido = pedidos.find((p) => p.id === numeroPedido);
    if (pedido) {
      pedido.status = novoStatus;
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
}
