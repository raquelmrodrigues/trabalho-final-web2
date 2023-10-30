import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemPedido } from 'src/app/shared/models/item-pedido';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { Pedido } from 'src/app/shared/models/pedido';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';


@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent implements OnInit{
  itens: ItemPedido[] = [];
  pedido: Pedido = new Pedido(7, new Date() , undefined, undefined,  0);
  pedidoID: (String| null);

  constructor(private route: ActivatedRoute) {
    //const ID: (String | null ) = this.route.snapshot.paramMap.get('id');
   // this.pedidoID = parseInt(ID?);
   
   this.pedidoID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.pedido = this.GetPedido();
    this.itens = this.listarItens(this.pedido);
    }


  listarItens(UmPedido: Pedido): ItemPedido [] {
    const UmPedidoItens: ItemPedido[] = [];

    UmPedido.items?.forEach((item) => {
      UmPedidoItens.push(item);
    });
  
    return UmPedidoItens;
  }

  GetPedido(): Pedido {
    return new Pedido(123546123, new Date(2023, 0, 23, 10, 50, 13), StatusPedido.PAGO,[
      new ItemPedido(123546123, 1,new Manutencao (54, 'Calça', 15,3) ,5),
      new ItemPedido(123546123, 2,new Manutencao (56, 'Terno', 30,4),1),
      new ItemPedido(123546123, 3,new Manutencao (10, 'Camisa', 20,2),2),
    ], 145);
  }

  GetID(IDdigitado: any): void{
    this.pedidoID = IDdigitado.toString();
  }
}