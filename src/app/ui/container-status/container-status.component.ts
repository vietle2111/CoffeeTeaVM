import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.css']
})
export class ContainerStatusComponent implements OnInit {

  maxCtn: Container = new Container;
  availableCtn: Container = new Container;
  constructor(private cs:ContainerService, private router:Router) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }
}
