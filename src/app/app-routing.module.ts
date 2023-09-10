import { NgModule } from '@angular/core';
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
import { ListarFuncionarioComponent } from './funcionario/listar-funcionario/listar-funcionario.component';
import { InserirFuncionarioComponent } from './funcionario/inserir-funcionario/inserir-funcionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar-funcionario/editar-funcionario.component';

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
    path: 'funcionario/novoFuncionario',
    component: InserirFuncionarioComponent
  },
  {
    path: 'funcionario/listarFuncionario',
    component: ListarFuncionarioComponent
  },
  {
    path: 'funcionario/editarFuncionario/:id',
    component: EditarFuncionarioComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
