
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';
import { LoginService } from '../services/login.service';


import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ){
    if(this.LoginService.usuarioLogado) {
      this.router.navigate(["funcionario/inicialFuncionario"])
    }
  }
  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.message = params['error'];
      })
  }
  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.LoginService.login(this.login).subscribe((usu) => {
        if (usu != null){
          this.LoginService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate(["funcionario/inicialFuncionario"]);
        }
        else {
          this.message = "Login ou Senha são Inválidos.";
        }
      });
    }
    this.loading = false;

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

      console.log('Formulário válido. Dados:', this.loginForm.value);
    }

  }
}

