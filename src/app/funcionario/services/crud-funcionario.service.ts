import { Injectable } from '@angular/core';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { Manutencao } from 'src/app/shared/models/manutencao.model';

const LS_CHAVE_1: string = "funcionario";
const LS_CHAVE_2: string = "Manutencao";

@Injectable({
  providedIn: 'root'
})
export class CrudFuncionarioService {
  constructor() { }
  // Crud de Listagem de funcionarios.
  listarFuncionario(): Funcionario[] {
    const funcionarios = localStorage[LS_CHAVE_1];
    return funcionarios ? JSON.parse(funcionarios) : [];
  }

  inserirFuncionario(funcionario: Funcionario): void {
    const funcionarios = this.listarFuncionario();

    funcionario.id = new Date().getTime();

    funcionarios.push(funcionario);

    localStorage[LS_CHAVE_1] = JSON.stringify(funcionarios);
  }

  buscarPorIdFuncionario(id: number): Funcionario | undefined {
    const funcionarios: Funcionario[] = this.listarFuncionario();

    return funcionarios.find(funcionario => funcionario.id === id);
  }

  atualizarFuncionario(funcionario: Funcionario): void {
    const funcionarios: Funcionario[] = this.listarFuncionario();

    funcionarios.forEach((obj, index, objs) => {
      if (funcionario.id === obj.id) {
        objs[index] = funcionario
      }
    })

    localStorage[LS_CHAVE_1] = JSON.stringify(funcionarios);
  }

  removerFuncionario(id: number): void {
    let funcionarios: Funcionario[] = this.listarFuncionario();

    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);

    localStorage[LS_CHAVE_1] = JSON.stringify(funcionarios);
  }
  



  // CRUD DE MANUTENCAO
  listarItem(): Manutencao[] {
    const manutencaoPecas = localStorage[LS_CHAVE_2];
    return manutencaoPecas ? JSON.parse(manutencaoPecas) : [];
  }

  inserirItem(manutencao: Manutencao): void {
    const manutencaoPecas = this.listarItem();

    manutencao.id = new Date().getTime();

    manutencaoPecas.push(manutencao);

    localStorage[LS_CHAVE_2] = JSON.stringify(manutencaoPecas);
  }

  buscarItemPorId(id:number): Manutencao | undefined {
    const manutencaoPecas: Manutencao[] = this.listarItem();
    
    return manutencaoPecas.find(manutencao => manutencao.id === id);
  }

  atualizarItem(manutencao: Manutencao): void {
    const manutencaoPecas: Manutencao[] = this.listarItem();


    manutencaoPecas.forEach( (obj, index, objs) => {
      if(manutencao.id === obj.id) {
        objs[index] = manutencao;
      }
    });

    localStorage[LS_CHAVE_2] = JSON.stringify(manutencaoPecas);
  }

  removerItem(id:number): void {
    let manutencaoPecas: Manutencao[] = this.listarItem();

    manutencaoPecas = manutencaoPecas.filter(manutencao => manutencao.id !== id);

    localStorage[LS_CHAVE_2] = JSON.stringify(manutencaoPecas);
  }
}
