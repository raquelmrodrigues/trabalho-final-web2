import { StatusPedido } from "./status-pedido";
import { ItemPedido } from "./item-pedido";
export class Pedido {
    constructor(
        
        public id: number,
        public date?: Date,
        public status?: StatusPedido,
        public items?: ItemPedido[],
        public valorTotal?: number
    ){

    }

}
