import { StatusPedido } from "./status-pedido";
import { ItemPedido } from "./item-pedido";
export class Pedido {
    constructor(

        public id: number,
        public datadopedido?: Date,
        public statuspedido?: number,
        public itens?: ItemPedido[],
        public valorTotal?: number,
        public status?: StatusPedido,
    ){

    }

}
