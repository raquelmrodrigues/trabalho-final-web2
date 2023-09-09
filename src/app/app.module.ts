import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FuncionarioModule } from './funcionario/funcionario.module';
import { ClienteModule } from './cliente/cliente.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

import { RouterModule } from '@angular/router';
import { RelatorioModule } from './relatorio/relatorio.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FuncionarioModule,
    ClienteModule,
    AutenticacaoModule,
    RelatorioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
