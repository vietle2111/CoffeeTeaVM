import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaleList } from '../models/sale-list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleListService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  baseUrl = "http://ec2-18-221-157-116.us-east-2.compute.amazonaws.com:5000";
  
  constructor(private httpc:HttpClient) { }

  getSaleList():Observable<SaleList[]>{
    const uri= this.baseUrl + "/saleLists";
    return this.httpc.get<SaleListResponse>(uri).pipe(map(res => res._embedded.saleLists));
  }

  addSaleList(sl: any):Observable<string>{
    const uri= this.baseUrl + "/saleLists";
    return this.httpc.post<string>(uri,sl,this.httpOptions);
  }
}

interface SaleListResponse{
  "_embedded":{
    "saleLists": SaleList[];
  }
}
