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

    let ctn = this.newDrinkOrder(chooseDrink);
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
        console.log(chooseDrink);
  
        this.cs.updateCurrentContainer(ctn).subscribe(rs => console.log(rs.toString()));
        //update available containers status
        this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
        this.msg="Drink has been chosen successfully!";
      }
    else this.msg="Please enter the drink choice!";
  }

  newDrinkOrder(cd: any):any{
    let newDrink = new Container();
    newDrink.teaContainer = this.availableCtn.teaContainer;
    newDrink.coffeeContainer = this.availableCtn.coffeeContainer;
    newDrink.waterContainer = this.availableCtn.waterContainer;
    newDrink.sugarContainer = this.availableCtn.sugarContainer;
    newDrink.milkContainer = this.availableCtn.milkContainer;
    return JSON.stringify(newDrink);
  }

  selectDrink()
  {
    document.write("Drink was Selected");
  }

}
