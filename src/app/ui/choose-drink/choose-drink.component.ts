import { Container } from 'src/app/models/container';
import {Drink} from 'src/app/models/drink';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-choose-drink',
  templateUrl: './choose-drink.component.html',
  styleUrls: ['./choose-drink.component.css']
})
export class ChooseDrinkComponent implements OnInit {
  maxCtn: Container;
  availableCtn: Container;
  id:string;
  msg:string;
  constructor(private cs:ContainerService) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }


  addDrink(chooseDrink){
    // this.id = (new Id).toISOString();
    let ctn = this.newContainerValue(chooseDrink);
    chooseDrink.value.teaRefill = chooseDrink.value.teaRefill*1000;
    chooseDrink.value.coffeeRefill = chooseDrink.value.coffeeRefill*1000;
    chooseDrink.value.blackCoffeeRefill = chooseDrink.value.blackCoffeeRefill*1000;
    chooseDrink.value.blackTeaRefill = chooseDrink.value.blackTeaRefill*1000;
    chooseDrink.value.milkRefill = chooseDrink.value.milkRefill*1000;
    chooseDrink.value.date = (new Date).toISOString();
    var cd  = JSON.stringify(chooseDrink.value);
    //check if filling value is valid
    if (chooseDrink.value.teaRefill>0 || chooseDrink.value.coffeeRefill>0 ||
      chooseDrink.value.waterRefill>0 || chooseDrink.value.sugarRefill>0 ||
      chooseDrink.value.milkRefill>0){
        console.log(cd);
        //save a record for refill
        // this.cs.addDrink(cd).subscribe(cs => console.log(cs.toString()));
        //update container
        this.cs.updateCurrentContainer(ctn).subscribe(rs => console.log(rs.toString()));
        //update available containers status
        this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
        this.msg="Drink has been chosen successfully!";
      }
    else this.msg="Please enter the drink choice!";
  }

  newContainerValue(cd: any):any{
    let newCtn = new Container();
    newCtn.teaContainer = this.availableCtn.teaContainer + cd.value.teaRefill;
    newCtn.coffeeContainer = this.availableCtn.coffeeContainer + cd.value.coffeeRefill;
    newCtn.waterContainer = this.availableCtn.waterContainer + cd.value.waterRefill;
    newCtn.sugarContainer = this.availableCtn.sugarContainer + cd.value.sugarRefill;
    newCtn.milkContainer = this.availableCtn.milkContainer + cd.value.milkRefill;
    return JSON.stringify(newCtn);
  }

}
