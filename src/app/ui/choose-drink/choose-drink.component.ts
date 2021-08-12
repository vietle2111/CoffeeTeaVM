import {Drink} from 'src/app/models/drink';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';
import { DrinkService } from 'src/app/services/drink.service';
import { ActivatedRoute } from '@angular/router';
import { SaleList } from 'src/app/models/sale-list';
import { SaleListService } from 'src/app/services/sale-list.service';
import { Container } from 'src/app/models/container';

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
  newCtnValue = new Container;
  isEnough = false;
    

  constructor(private cs:ContainerService, private ds: DrinkService, private route:ActivatedRoute, private sls:SaleListService ) { }

  ngOnInit(): void {                      
    this.ds.getDrinkList().subscribe(dl => this.drinkList = dl);
  }

  addSaleList(dr:Drink){
    let noc = this.numberOfCup;
    this.cs.getAvailableContainerValue().subscribe(rs => {
    this.newCtnValue.teaContainer = rs.teaContainer - dr.tea*noc/1000;
    this.newCtnValue.coffeeContainer = rs.coffeeContainer - dr.coffee*noc/1000;
    this.newCtnValue.milkContainer = rs.milkContainer - dr.milk*noc/1000;
    this.newCtnValue.sugarContainer = rs.sugarContainer - dr.sugar*noc/1000;
    this.newCtnValue.waterContainer = rs.waterContainer - dr.water*noc/1000;
    //check if containers are enough for making drinks
    if (this.newCtnValue.teaContainer<=0 || this.newCtnValue.coffeeContainer<=0 ||
      this.newCtnValue.milkContainer<=0 || this.newCtnValue.sugarContainer<=0 ||
      this.newCtnValue.waterContainer<=0)
      this.msg = "Containers are not enough. Please refill";
    else{
      // update containers with new avalue
      this.cs.updateCurrentContainer(this.newCtnValue).subscribe(rs => {this.msg += " Containers are updated"});
      // add sales into salelist
      this.sls.addSaleList(this.setSaleListValue(dr,noc)).subscribe(rs =>{ 
        if (rs.saleListId!=0){
          this.msg = `${this.numberOfCup} ${dr.name}(s) have been made.`;
        }});
    }
    });
  }

  setSaleListValue(dr: Drink, noc: number):string{
    let newSale = new SaleList;
    newSale.drink = dr;
    newSale.date = new Date;
    newSale.numberOfCup = noc;
    return JSON.stringify(newSale);
  }
}