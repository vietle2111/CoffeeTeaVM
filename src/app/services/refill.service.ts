import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Refill } from '../models/refill';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RefillService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  baseUrl = "http://ec2-18-221-157-116.us-east-2.compute.amazonaws.com:5000";
  constructor(private httpc:HttpClient) { }

  getRefillList():Observable<Refill[]>{
    const uri= this.baseUrl + "/refills";
    return this.httpc.get<RefillResponse>(uri).pipe(map(res => res._embedded.refills));
  }

  getRefillToday():Observable<Refill[]>{
    const uri= this.baseUrl + "/refills/search/findByToday";
    return this.httpc.get<RefillResponse>(uri).pipe(map(res => res._embedded.refills));
  }


  addRefill(rf: any):Observable<string>{
    const uri= this.baseUrl + "/refills";
    return this.httpc.post<string>(uri,rf,this.httpOptions);
  }
}

interface RefillResponse{
  "_embedded":{
    "refills": Refill[];
  }
}
