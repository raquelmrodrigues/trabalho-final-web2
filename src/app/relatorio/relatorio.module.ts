import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioService } from './services/relatorio.service';
import { SelecionarRelatorioComponent } from './selecionar-relatorio/selecionar-relatorio.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SelecionarRelatorioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    RelatorioService
  ]
})
export class RelatorioModule { }
