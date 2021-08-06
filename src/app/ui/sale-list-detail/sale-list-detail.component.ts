import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleList } from 'src/app/models/sale-list';
import { DrinkService } from 'src/app/services/drink.service';
import { SaleListService } from 'src/app/services/sale-list.service';

@Component({
  selector: 'app-sale-list-detail',
  templateUrl: './sale-list-detail.component.html',
  styleUrls: ['./sale-list-detail.component.css']
})
export class SaleListDetailComponent implements OnInit {
  saleList: SaleList[] =[];
  number_of_cup: number = 0;
  total_cost: number = 0;

  constructor(private sl: SaleListService, private route:ActivatedRoute, private ds: DrinkService) { }

  ngOnInit(): void {
    this.sl.getSaleList().subscribe(rs => this.saleList = rs);
    this.saleList.forEach(sale => {
      console.log("sao la vay"+JSON.stringify(sale));
      this.ds.getDrink(sale.drink.href).subscribe(dr => {sale.tmpDrink = dr} );
      console.log(JSON.stringify(sale.tmpDrink));
      this.total_cost = this.total_cost+sale.tmpDrink.cost;
      this.number_of_cup = this.number_of_cup+sale.numberOfCup;
    });
  }


}
