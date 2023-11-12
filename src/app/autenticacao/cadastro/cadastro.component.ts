import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { NgForm } from '@angular/forms';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @ViewChild('formCadastro') formCadastro!: NgForm;
  cliente!: Usuario;

  constructor(
    private cadastroService: CadastroService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cliente = new Usuario ();
  }
  cadastrarCliente(): void{
    this.cliente.perfil = "CLIENTE"
    this.cadastroService.inserirCliente(this.cliente).subscribe(response => {
      console.log('cliente inserido com sucesso', response);
    },
    error => {
      console.log('erro!', error);
    });
  }

  verificaValidTouched(campo: { valid: any; touched: any }) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep: any, form: NgForm) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      let validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http
  .get('https://viacep.com.br/ws/' + cep + '/json')
  .subscribe({
    next: (dados: any) => this.populaDadosForm(dados, form),
    error: (error) => {
      console.error('Error while fetching address data:', error);
    }
  });

      }
    }
  }


  populaDadosForm(dados: any, form: NgForm): void {
    form.form.setValue({
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf,
    });
  }

}
