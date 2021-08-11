import { Container } from 'src/app/models/container';
import {Drink} from 'src/app/models/drink';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';
import { DrinkService } from 'src/app/services/drink.service';
import { ActivatedRoute } from '@angular/router';
import { SaleList } from 'src/app/models/sale-list';
import { SaleListService } from 'src/app/services/sale-list.service';

@Component({
  selector: 'app-choose-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css']
})
export class ChooseDrinkComponent implements OnInit {
  drinkList: Drink[] = [];
  dates:string = (new Date).toISOString();
  msg:string = "";
  numberOfCup:number=0;
  constructor(private cs:ContainerService, private ds: DrinkService, private route:ActivatedRoute, private sls:SaleListService ) { }

  ngOnInit(): void {                      
    this.ds.getDrinkList().subscribe(dl => this.drinkList = dl);
  }

  addSaleList(dr: Drink){
    //console.log(JSON.stringify(dr)+this.numberOfCup);
    let newSale = new SaleList;
    newSale.drink = dr;
    newSale.date = new Date;
    newSale.numberOfCup = this.numberOfCup;
    var sv = JSON.stringify(newSale)
    this.sls.addSaleList(sv).subscribe(rs =>{ 
      this.msg=(rs.saleListId!=0)?"Drink has been chosen successfully":"Can't get drink!!!"});
  }
}
