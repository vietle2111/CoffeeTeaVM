import { Container } from 'src/app/models/container';
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
  constructor(private cs:ContainerService) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }

}
