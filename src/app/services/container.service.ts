import { HttpClient } from '@angular/common/http';
import { Container } from '../models/container';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

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
  updateCurrentContainer(ctn: any):Observable<string>{
    const uri= this.baseUrl + "/containers/1";
    return this.httpc.put<string>(uri,ctn,this.httpOptions);
  }
}
