import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { CrudFuncionarioService } from './services/crud-funcionario.service';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { FormsModule } from '@angular/forms';
import { InserirFuncionarioComponent } from './inserir-funcionario/inserir-funcionario.component';

@NgModule({
  declarations: [
    InicialFuncionarioComponent,
    ConfirmarRecolhimentoComponent,
    ListarPedidosComponent,
    ListarFuncionarioComponent,
    InserirFuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
 providers: [
  CrudFuncionarioService,
 ]

})
export class FuncionarioModule { }
