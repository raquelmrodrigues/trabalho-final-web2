import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioReceitasComponent } from './relatorio-receitas/relatorio-receitas.component';
import { RelatorioPedidosComponent } from './relatorio-pedidos/relatorio-pedidos.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';
import { RelatorioService } from './services/relatorio.service';
import { SelecionarRelatorioComponent } from './selecionar-relatorio/selecionar-relatorio.component';



@NgModule({
  declarations: [
    RelatorioReceitasComponent,
    RelatorioPedidosComponent,
    RelatorioClientesComponent,
    SelecionarRelatorioComponent
  ],
  imports: [
    CommonModule,
   
  ],
  providers:[
    RelatorioService
  ]
})
export class RelatorioModule { }
