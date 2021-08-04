import { HttpClient } from '@angular/common/http';
import { Container } from '../models/container';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  baseUrl = "http://ec2-18-221-157-116.us-east-2.compute.amazonaws.com:5000";
  
  constructor(private httpc:HttpClient) { }

  getAvailableContainerValue():Observable<Container>{
    const uri= this.baseUrl + "/containers/1";
    return this.httpc.get<Container>(uri);
  }
  getMaxContainerValue():Observable<Container>{
    const uri= this.baseUrl + "/containers/2";
    return this.httpc.get<Container>(uri);
  }
}
