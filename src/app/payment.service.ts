import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Payment } from './payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";

  addNewpayment(payment:Payment)
  {
    return this.httpclient.post(this.baseUrl+"/payment",payment);
  }
  
}
