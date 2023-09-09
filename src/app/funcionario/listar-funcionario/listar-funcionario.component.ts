import { Component, OnInit } from '@angular/core';

import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

funcionarios:Funcionario[] = [];

constructor(private crudfuncionario : CrudFuncionarioService){}

ngOnInit():void{
 this.funcionarios = this.listarTodos();
}

listarTodos(): Funcionario[] {
  //return this.crudfuncionario.listarTodos();
 return [
  new Funcionario (1, "lllllll@lll.com", "LNome", new Date(), "LSenha"),
  new Funcionario (1, "mmmmmmm@mmm.com", "MNome", new Date(), "MSenha"),
  new Funcionario (1, "nnnnnnn@nnn.com", "NNome", new Date(), "NSenha"),
  new Funcionario (1, "ooooooo@ooo.com", "ONome", new Date(), "OSenha"),
 ]
}

}
