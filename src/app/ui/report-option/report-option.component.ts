import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-report-option',
  templateUrl: './report-option.component.html',
  styleUrls: ['./report-option.component.css']
})
export class ReportOptionComponent implements OnInit {

  maxCtn: Container;
  availableCtn: Container;
  constructor(private cs:ContainerService) { }

  ngOnInit(): void {
    this.cs.getMaxContainerValue().subscribe(c => {this.maxCtn=c});
    this.cs.getAvailableContainerValue().subscribe(c => {this.availableCtn=c});
  }

}
