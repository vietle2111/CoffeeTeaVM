import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  baseUrl = "http://ec2-18-221-157-116.us-east-2.compute.amazonaws.com:5000";
  
  constructor(private httpc:HttpClient) { }

  getDrink(uri: string):Observable<Drink>{
    return this.httpc.get<Drink>(uri);
  }
  getDrinkList():Observable<Drink[]>{
    const uri = this.baseUrl + "/drinks";
    return this.httpc.get<DrinkResponse>(uri).pipe(map(res => res._embedded.drinks));
  }
}
interface DrinkResponse{
  "_embedded":{
    "drinks": Drink[];
  }
}