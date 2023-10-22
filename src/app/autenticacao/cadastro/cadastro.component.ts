import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    usuario: any = {
        nome: null,
        email: null    
    }

    onSubmit(form: any) {
        console.log(form);

        //console.log(this.usuario);
      }
    
      constructor (private http: HttpClient) {}
    
      ngOnInit(): void {}

      verificaValidTouched(campo: { valid: any; touched: any; }) {
        return !campo.valid && campo.touched;
      }

      aplicaCssErro(campo: any){
        return {
            'has-error' : this.verificaValidTouched(campo)
        }
      }
      
      consultaCEP(cep: any, form: any) {
        //Nova variável "cep" somente com dígitos.
        cep = cep.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            let validacep = /^[0-9]{8}$/;
            
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                
                this.http.get("//viacep.com.br/ws/"+ cep +"/json")
                .subscribe((dados: any) => this.populaDadosForm(dados, form));
            }
        }
      }
    populaDadosForm(dados: any, form: any): void {
        form.setValue({
            cpf: form.value.cpf,
            nome: form.value.nome,
            email: form.value.email,
            endereco: {
                cep: dados.cep,
                rua: dados.logradouro,
                bairro: dados.bairro ,
                cidade: dados.localidade,
                uf: dados.uf
            },
            telefone: form.value.telefone,
            senha: form.value.senha,
            confirmacao: form.value.confirmacao
        });
    }
}


