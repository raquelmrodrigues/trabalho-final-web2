import { Injectable } from '@angular/core';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const LS_CHAVE_1: string = "funcionario";
const LS_CHAVE_2: string = "Manutencao";


@Injectable({
  providedIn: 'root'
})
export class CrudFuncionarioService {
  private backendURL = 'http://localhost:8081';
  constructor(
    private http: HttpClient
  ) { }
  // Crud de Listagem de funcionarios.
  listarFuncionario(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.backendURL}/funcionarios`);
  }

  inserirFuncionario(funcionario: Funcionario): Observable<any> {

    const url = `${this.backendURL}/funcionarios`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const funcionarioJSON = JSON.stringify(funcionario);

    return this.http.post(url, funcionarioJSON, { headers });
  }

  buscarPorIdFuncionario(id: number): Observable<Funcionario>{
    let func = this.http.get<Funcionario>(`${this.backendURL}/funcionarios/${id}`);
    return func;
  }

  atualizarFuncionario(funcionario: Funcionario): Observable<any> {
    const url = `${this.backendURL}/funcionarios/${funcionario.id}`;
    return this.http.put(url, funcionario);
  }
  removerFuncionario(funcionario: Funcionario): Observable<any>{

    const url = `${this.backendURL}/funcionarios/${funcionario.id}`
    return this.http.delete(url)

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
