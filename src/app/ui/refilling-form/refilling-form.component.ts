import { Container } from 'src/app/models/container';
import { Refill } from 'src/app/models/refill';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';
import { RefillService } from 'src/app/services/refill.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refilling-form',
  templateUrl: './refilling-form.component.html',
  styleUrls: ['./refilling-form.component.css']
})
export class RefillingFormComponent implements OnInit {
  maxCtn: Container;
  availableCtn: Container;
  dates:string;
  msg:string;

  constructor(private cs: ContainerService, private rs: RefillService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }

  addRefill(refillForm){
    this.dates = (new Date).toISOString();
    let ctn = this.newContainerValue(refillForm);
    refillForm.value.teaRefill = refillForm.value.teaRefill*1000;
    refillForm.value.coffeeRefill = refillForm.value.coffeeRefill*1000;
    refillForm.value.waterRefill = refillForm.value.waterRefill*1000;
    refillForm.value.sugarRefill = refillForm.value.sugarRefill*1000;
    refillForm.value.milkRefill = refillForm.value.milkRefill*1000;
    refillForm.value.date = (new Date).toISOString();
    var rf  = JSON.stringify(refillForm.value);
    //check if filling value is valid
    if (refillForm.value.teaRefill>0 || refillForm.value.coffeeRefill>0 ||
      refillForm.value.waterRefill>0 || refillForm.value.sugarRefill>0 ||
      refillForm.value.milkRefill>0){
        console.log(rf);
        //save a record for refill
        this.rs.addRefill(rf).subscribe(rs => console.log(rs.toString()));
        //update container
        this.cs.updateCurrentContainer(ctn).subscribe(rs => console.log(rs.toString()));
        //update available containers status
        this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
        this.msg="Containers are refilled successfully!";
      }
    else this.msg="Please enter the refill amount!";
  }

  newContainerValue(rf: any):any{
    let newCtn = new Container();
    newCtn.teaContainer = this.availableCtn.teaContainer + rf.value.teaRefill;
    newCtn.coffeeContainer = this.availableCtn.coffeeContainer + rf.value.coffeeRefill;
    newCtn.waterContainer = this.availableCtn.waterContainer + rf.value.waterRefill;
    newCtn.sugarContainer = this.availableCtn.sugarContainer + rf.value.sugarRefill;
    newCtn.milkContainer = this.availableCtn.milkContainer + rf.value.milkRefill;
    return JSON.stringify(newCtn);
  }
}
