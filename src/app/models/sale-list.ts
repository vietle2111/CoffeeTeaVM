import { Drink } from "./drink";

export class SaleList {
    saleListId: number;
    drink: DrinkLink;
    numberOfCup: number;
    date: Date;
    tmpDrink: Drink;
}
interface DrinkLink{
    "href": string;
}
