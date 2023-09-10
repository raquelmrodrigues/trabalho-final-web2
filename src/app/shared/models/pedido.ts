import { StatusPedido } from "./status-pedido";
export class Pedido {
    constructor(
        
        public id: number,
        public date?: Date,
        public status?: StatusPedido
    ){

    }

}
