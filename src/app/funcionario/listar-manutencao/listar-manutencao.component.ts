import { Component } from '@angular/core';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Manutencao } from 'src/app/shared/models/manutencao.model';


@Component({
  selector: 'app-listar-manutencao',
  templateUrl: './listar-manutencao.component.html',
  styleUrls: ['./listar-manutencao.component.css']
})
export class ListarManutencaoComponent{

  manutencao: Manutencao[] = [];

  constructor(private manutencaoService : CrudFuncionarioService) {}

  ngOnInit(): void {  
    this.manutencao = this.listarTodos();
    console.log(this.manutencao);
  }

  listarTodos(): Manutencao[] {
    return this.manutencaoService.listarItem();
    
  }

  remover($event: any, manutencao: Manutencao): void {
    $event.preventDefault();
      this.manutencaoService.removerItem(manutencao.id!);
      this.manutencao = this.listarTodos();
  }
}
