import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { InicialFuncionarioComponent } from './funcionario/inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './funcionario/confirmar-recolhimento/confirmar-recolhimento.component';
import { ListarPedidosComponent } from './funcionario/listar-pedidos/listar-pedidos.component';
import { InicialClienteComponent } from './cliente/inicial-cliente/inicial-cliente.component';
import { ConsultarPedidoComponent } from './cliente/consultar-pedido/consultar-pedido.component';
import { ListarPedidosClienteComponent } from './cliente/listar-pedidos-cliente/listar-pedidos-cliente.component';
import { OrcamentoClienteComponent } from './cliente/orcamento-cliente/orcamento-cliente.component';
import { PedidosClienteComponent } from './cliente/pedidos-cliente/pedidos-cliente.component';
import { SelecionarRelatorioComponent } from './relatorio/selecionar-relatorio/selecionar-relatorio.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: 'autenticacao/login',
  pathMatch: 'full'
  },
  {
  path: 'autenticacao',
  redirectTo: 'autenticacao/login',
  },
  {
  path: 'autenticacao/login',
  component: LoginComponent
  },
  {
  path: 'autenticacao/cadastro',
  component: CadastroComponent
  },
  {
  path: 'funcionario/inicialFuncionario',
  component: InicialFuncionarioComponent
  },
  {
  path: 'funcionario/confirmacaoRecolhimento',
  component: ConfirmarRecolhimentoComponent
  },
  {
  path: 'funcionario/listarPedidos',
  component: ListarPedidosComponent  
  },
  {
    path: 'cliente/inicialCliente',
    component: InicialClienteComponent
  },
  {
    path: 'cliente/consultarPedido',
    component: ConsultarPedidoComponent
  },
  {
    path: 'cliente/listarPedidosCliente',
    component: ListarPedidosClienteComponent
  },
  {
    path: 'cliente/orcamentoCliente',
    component: OrcamentoClienteComponent
  },
  {
    path: 'cliente/pedidosCliente',
    component: PedidosClienteComponent
  },
  {
  path: 'relatorio/selecionarRelatorio',
    component: SelecionarRelatorioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
