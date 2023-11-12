import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent {
  filtro: string = '';
  pedidos: any[] = [];
  pedidosFiltrados: any[] = [];
  // Lista estática de pedidos (pode ser substituída por dados dinâmicos do backend)
  listaPedidos = [
    {
      numero: 76438,
      precoTotal: 121.0,
      prazoServico: new Date('2023-10-24'),
      roupas: [
        { numero: 1, nome: 'Fronha', preco: 10 },
        { numero: 2, nome: 'Camiseta manga longa', preco: 1 },
        { numero: 3, nome: 'Meia', preco: 1 },
        { numero: 4, nome: 'Cobertor', preco: 100 },
        { numero: 5, nome: 'Moletom hoodie', preco: 10 },
        { numero: 6, nome: 'Chapéu', preco: 100 },
      ],
    },
    {
      numero: 76439,
      precoTotal: 80.0,
      prazoServico: new Date('2023-10-20'),
      roupas: [
        { numero: 1, nome: 'Calça jeans', preco: 50 },
        { numero: 2, nome: 'Tênis esportivo', preco: 30 },
      ],
    },
    {
      numero: 76440,
      precoTotal: 45.5,
      prazoServico: new Date('2023-10-18'),
      roupas: [
        { numero: 1, nome: 'Camiseta básica', preco: 15 },
        { numero: 2, nome: 'Shorts de praia', preco: 20 },
        { numero: 3, nome: 'Boné', preco: 10.5 },
      ],
    },
    {
      numero: 76441,
      precoTotal: 55.0,
      prazoServico: new Date('2023-10-25'),
      roupas: [
        { numero: 1, nome: 'Vestido floral', preco: 35 },
        { numero: 2, nome: 'Sandália de salto', preco: 20 },
      ],
    },
    {
      numero: 76442,
      precoTotal: 30.0,
      prazoServico: new Date('2023-10-15'),
      roupas: [
        { numero: 1, nome: 'Camiseta polo', preco: 20 },
        { numero: 2, nome: 'Bermuda cargo', preco: 10 },
      ],
    },
  ];

  filtrarPedidos(event: Event) {
    // Implemente a lógica de filtragem com base no número do pedido (ou outros critérios)
    // Aqui, estou filtrando pelo número do pedido
    if (this.filtro) {
      this.pedidosFiltrados = this.listaPedidos.filter((pedido) =>
        pedido.numero.toString().includes(this.filtro)
      );
    } else {
      
      // Se o campo de pesquisa estiver vazio, mostre todos os pedidos novamente
      // Você pode querer buscar novamente os dados do backend neste ponto
      // this.pedidos = this.servicoConsultaPedidos.obterPedidos();
    }
  }
}
