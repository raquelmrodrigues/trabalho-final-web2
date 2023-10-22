import { Login } from './../../shared/models/login.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const LS_CHAVE: string = "usuarioLogado";
@Injectable({
  providedIn: 'root'
})


export class LoginService {

public get usuarioLogado(): Usuario {
  let usu = localStorage[LS_CHAVE];
  return (usu? JSON.parse(localStorage[LS_CHAVE]): null);
}
public set usuarioLogado(usuario: Usuario) {
  localStorage[LS_CHAVE] = JSON.stringify(usuario);
}
logout(){
  delete localStorage[LS_CHAVE]
}
login(login: Login): Observable<Usuario | null> {
  let usu = new Usuario(1, "teste-func", login.login, login.senha, "FUNC");
  if (login.login == login.senha) {
    if(login.login == "admin"){
      usu = new Usuario(1, "teste-admin", login.login, login.senha, "ADMIN");
    }
    else if (login.login == "gerente") {
      usu = new Usuario(1, "teste-gerente", login.login, login.senha, "GERENTE");
    }
    return of(usu);
  }
  else {
    return of(null);
  }
}
  constructor() { }
}
