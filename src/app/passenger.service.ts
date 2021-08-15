import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  

  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";


 
 getAllPassengers()
 {
   return this.httpclient.get(this.baseUrl+"/passenger");
 }

 
 addNewPassenger(passenger:Passenger)
 {
   return this.httpclient.post(this.baseUrl+"/passenger",passenger);
 }
 searchPassengerById(passengerId:string)
  {
    return this.httpclient.get(this.baseUrl+"/passenger/"+passengerId);
  }
  updatePassenger(passenger:Passenger)
  {
    return this.httpclient.put(this.baseUrl+"/passenger",passenger);
  }
  deletePassenger(passenger:any)
  {
    return this.httpclient.delete(this.baseUrl+"/passenger/"+passenger);
  }

  fetchproducts(bookingid:string)
  {
    return this.httpclient.get(this.baseUrl+"/passengerByBooking/"+bookingid)
  }
  getPassengerHistory(){
    return this.httpclient.get(this.baseUrl+"/passengerHistory");
  }

  
}

