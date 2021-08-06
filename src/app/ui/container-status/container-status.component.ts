import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.css']
})
export class ContainerStatusComponent implements OnInit {

  maxCtn: Container;
  availableCtn: Container;
  constructor(private cs:ContainerService) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }
}
