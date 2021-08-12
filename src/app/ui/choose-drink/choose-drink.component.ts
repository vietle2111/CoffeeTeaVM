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
  msg:string = "Can't get drink!!!";
  numberOfCup:number=0;

  constructor(private cs:ContainerService, private ds: DrinkService, private route:ActivatedRoute, private sls:SaleListService ) { }

  ngOnInit(): void {                      
    this.ds.getDrinkList().subscribe(dl => this.drinkList = dl);
  }

  addSaleList(dr: Drink){
    //console.log(JSON.stringify(dr)+this.numberOfCup);
    var isSold = true;
    let newSale = new SaleList;
    newSale.drink = dr;
    newSale.date = new Date;
    newSale.numberOfCup = this.numberOfCup;
    var sv = JSON.stringify(newSale)
    this.sls.addSaleList(sv).subscribe(rs =>{ 
      if (rs.saleListId!=0){
        this.msg = `${dr.name} has been chosen successfully`;
        //update containers

        this.cs.updateCurrentContainer(this.setContainerValue(dr, this.numberOfCup)).subscribe(rs => {});
      }});
  }

  setContainerValue(dr:Drink, noc: number):Container{
    let availableCtn: Container;
    this.cs.getAvailableContainerValue().subscribe(rs => availableCtn = rs);
    let newCtnValue = new Container;
    newCtnValue.teaContainer = availableCtn.teaContainer - dr.tea*noc/1000;
    newCtnValue.coffeeContainer = availableCtn.coffeeContainer - dr.coffee*noc/1000;
    newCtnValue.milkContainer = availableCtn.milkContainer - dr.milk*noc/1000;
    newCtnValue.sugarContainer =availableCtn.sugarContainer - dr.sugar*noc/1000;
    newCtnValue.waterContainer = availableCtn.waterContainer - dr.water*noc/1000;
    return newCtnValue;
  }
}
