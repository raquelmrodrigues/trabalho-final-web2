import { Component, OnInit } from '@angular/core';
import { end } from '@popperjs/core';
import { ItemPedido } from 'src/app/shared/models/item-pedido';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { Pedido } from 'src/app/shared/models/pedido';
import { StatusPedido } from 'src/app/shared/models/status-pedido';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent implements OnInit{
  itens: ItemPedido[] = [];
  pedidos: Pedido[] = [];
  //new Pedido(7, new Date() , undefined, [ new ItemPedido(0, 1,new Manutencao (0, '000', 0,0) ,0)],  0);
 
  ngOnInit(): void{
    this.pedidos = this.ListarPedidos();
    this.pedidos.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateA - dateB;
    });
    }


    listarItens(UmPedido: Pedido): string[] {
      let itens: string[] = [];
    
      UmPedido.items?.forEach((item) => {
        itens.push(item.roupa?.peca || 'Peça não especificada');
      });
    
      return itens;
    }
    

  ListarPedidos(): Pedido [] {
    return[
      new Pedido(123546123, new Date(2023, 0, 23, 10, 50, 13), StatusPedido.ABERTO,[
        new ItemPedido(1, 123546123,new Manutencao (54, 'Calça', 15,3) ,5),
        new ItemPedido(3, 123546123,new Manutencao (56, 'Terno', 30,4),1), 
        new ItemPedido(4, 123546123,new Manutencao (10, 'Camisa', 20,2),2)], 145),
      new Pedido(987654321, new Date(2023, 1, 15, 14, 30, 0), StatusPedido.ABERTO, [
          new ItemPedido(1, 5, new Manutencao(101, 'Jaqueta', 50, 2), 2),
          new ItemPedido(2, 6, new Manutencao(102, 'Vestido', 60, 3), 1),
        ], 200),
      new Pedido(555555555, new Date(2023, 2, 10, 9, 15, 0), StatusPedido.ABERTO, [
          new ItemPedido(10, 4, new Manutencao(88, 'Blusa', 25, 3), 3),
          new ItemPedido(11, 7, new Manutencao(77, 'Sapato', 80, 1), 2),
        ], 250),
      new Pedido(888888888, new Date(2023, 3, 20, 16, 0, 0), StatusPedido.ABERTO, [
          new ItemPedido(13, 8, new Manutencao(92, 'Saia', 35, 4), 1),
          new ItemPedido(14, 9, new Manutencao(75, 'Camiseta', 20, 2), 3),
        ], 170)       
    ];}

}
