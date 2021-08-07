import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Refill } from 'src/app/models/refill';
import { RefillService } from 'src/app/services/refill.service';

@Component({
  selector: 'app-refilling-detail',
  templateUrl: './refilling-detail.component.html',
  styleUrls: ['./refilling-detail.component.css']
})
export class RefillingDetailComponent implements OnInit {
  allRf = new Refill;

  constructor(private rs:RefillService) { }

  ngOnInit(): void {
    this.allRf = new Refill;
    this.rs.getRefillList().subscribe(rf => {
      rf.forEach(sr => {
        this.allRf.teaRefill += (sr.teaRefill!=0 ? 1 : 0);
        this.allRf.coffeeRefill += (sr.coffeeRefill!=0 ? 1 : 0);
        this.allRf.milkRefill += (sr.milkRefill!=0 ? 1 : 0);
        this.allRf.sugarRefill += (sr.sugarRefill!=0 ? 1 : 0);
        this.allRf.waterRefill += (sr.waterRefill!=0 ? 1 : 0);
      })
    })
  }

}
