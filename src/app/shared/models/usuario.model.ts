
export class Usuario {

  constructor(
    public id?: number,
    public nome?: string,
    public login?: string,
    public senha?: string,
    public perfil?: string,
    public cpf?: string,
    public email?: string,
    public telefone?: string,
    public cep?: number,
    public rua?: string,
    public bairro?: string,
    public cidade?: string,
    public estado?: string,
    public dataDeNasc?: Date,

  ){}
}
