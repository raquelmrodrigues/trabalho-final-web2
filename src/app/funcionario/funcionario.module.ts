import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';


@NgModule({
  declarations: [
    InicialFuncionarioComponent,
    ConfirmarRecolhimentoComponent,
    FinalizarPedidoComponent,
    ListarPedidosComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FuncionarioModule { }
