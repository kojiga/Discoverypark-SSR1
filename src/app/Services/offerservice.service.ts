
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Offers } from '../Models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferserviceService {

  constructor(private httpclient:HttpClient) { }
  baseurl=" http://localhost:3000/times";


  GetUpdates(data:any):Observable <any>{
    return this.httpclient.post(this.baseurl,data);

  }
  GetData():Observable <any>{
    return this.httpclient.get(this.baseurl);

  }
}
