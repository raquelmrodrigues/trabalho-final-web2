import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';


@NgModule({
  declarations: [
    InicialFuncionarioComponent,
    ConfirmarRecolhimentoComponent,
    ListarPedidosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FuncionarioModule { }
