import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';
import { Pedido } from 'src/app/shared/models/pedido';
import { LoginService } from '../../autenticacao/services/login.service';

@Component({
  selector: 'app-orcamento-cliente',
  templateUrl: './orcamento-cliente.component.html',
  styleUrls: ['./orcamento-cliente.component.css']
})
export class OrcamentoClienteComponent implements OnInit{
  id: number = 0
  pedido: Pedido = new Pedido(0);

  constructor(private route: ActivatedRoute,
    private pedidoService: PedidosService,
    private loginService: LoginService,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        const idPedido = params['pedidoId'];
        this.id = idPedido

      })

  }

  ngOnInit(): void{
    this.pedidoService.listarPedidosporID(this.id).subscribe((pedido) => {
      this.pedido = pedido;
      this.pedidoService.setSomaDePrazos(pedido);
      this.pedidoService.setSomaDePrecos(pedido);
    })}

    reprovarOrcamento(){
      if (this.pedido && this.pedido.statuspedido == 1) {
        this.pedido.statuspedido = 2;
        this.pedidoService.alterarPedidos(this.pedido).subscribe({
          next: (res: any) => {
            console.log("pedido rejeitado", res);
            this.router.navigate(['/cliente/listarPedidosCliente'])
          },
          error: (error: any) => {
            console.log("erro", error);
          }
        })
      }

    }
}
