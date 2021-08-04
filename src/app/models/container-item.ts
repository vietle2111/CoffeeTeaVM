import { Drink } from "./choose-drink";
export class ContainerItem {
    id: number;
    name: string;
    sku:string;
    imageUrl:string;
    unitPrice:number;
    quantity: number;
    
    constructor(drink: Drink) {
        this.id = drink.id;
        this.name = drink.name;
        this.sku = drink.sku;
        this.imageUrl = drink.imageUrl;
        this.unitPrice = drink.unitPrice;
        this.quantity = 1;
    }
}
