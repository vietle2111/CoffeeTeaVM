import { Container } from 'src/app/models/container';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-refilling-form',
  templateUrl: './refilling-form.component.html',
  styleUrls: ['./refilling-form.component.css']
})
export class RefillingFormComponent implements OnInit {
  maxCtn: Container;
  availableCtn: Container;


  constructor(private cs: ContainerService) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }

  
    
}
