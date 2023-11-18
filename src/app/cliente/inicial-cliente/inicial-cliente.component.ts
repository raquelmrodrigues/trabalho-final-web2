import { Usuario } from './../../shared/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/shared/models/item-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { LoginService } from '../../autenticacao/services/login.service';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent implements OnInit{

  constructor(private loginService: LoginService, private pedidoService: PedidosService){

  }
  itens: ItemPedido[] = [];
  pedidos: Pedido[] = [];

  ngOnInit(): void{
   this.pedidoService.listarPedidosporIDCliente(this.usuarioLogado?.id).subscribe(
    pedidos => {
      this.pedidos = pedidos;
      console.log(pedidos);
    }
   )
   // this.pedidos.sort((a, b) => {
   //   const dateA = a.date ? new Date(a.date).getTime() : 0;
  //    const dateB = b.date ? new Date(b.date).getTime() : 0;
   //   return dateA - dateB;
   // });
    }
    get usuarioLogado(): Usuario | null {
      return this.loginService.usuarioLogado;
    }


   /* listarItens(UmPedido: Pedido): string[] {
      let itens: string[] = [];

      UmPedido.items?.forEach((item) => {
        itens.push(item.roupa?.peca || 'Peça não especificada');
      });

      return itens;
    }
*/

}
