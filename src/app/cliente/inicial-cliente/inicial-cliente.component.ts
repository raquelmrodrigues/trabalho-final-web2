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
   // this.pedidos = this.ListarPedidos();
   // this.pedidos.sort((a, b) => {
   //   const dateA = a.date ? new Date(a.date).getTime() : 0;
  //    const dateB = b.date ? new Date(b.date).getTime() : 0;
   //   return dateA - dateB;
   // });
    }


   /* listarItens(UmPedido: Pedido): string[] {
      let itens: string[] = [];

      UmPedido.items?.forEach((item) => {
        itens.push(item.roupa?.peca || 'Peça não especificada');
      });

      return itens;
    }
*/

  ListarPedidos(): Pedido [] {
    return this.pedidos
  }

}
