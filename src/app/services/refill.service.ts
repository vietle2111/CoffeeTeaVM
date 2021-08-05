import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Refill } from '../models/refill';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefillService {
  baseUrl = "http://ec2-18-221-157-116.us-east-2.compute.amazonaws.com:5000";
  constructor(private httpc:HttpClient) { }

  getRefillList():Observable<Refill[]>{
    const uri= this.baseUrl + "/refills";
    return this.httpc.get<RefillResponse>(uri).pipe(map(res => res._embedded.refills));
  }
}

interface RefillResponse{
  "_embedded":{
    "refills": Refill[];
  }
}
