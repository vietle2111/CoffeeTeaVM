import { Drink } from "./drink";

export class SaleList {
    saleListId: number;
    numberOfCup: number;
    date: Date;
    _links : DrinkLink;
    tmpDrink: Drink = new Drink;
}
interface DrinkLink{
    "drink":{
        "href": string;
    }
}
