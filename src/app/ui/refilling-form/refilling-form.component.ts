import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/service/container.service';

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
