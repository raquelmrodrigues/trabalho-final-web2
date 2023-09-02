import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { InicialFuncionarioComponent } from './funcionario/inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './funcionario/confirmar-recolhimento/confirmar-recolhimento.component';


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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
