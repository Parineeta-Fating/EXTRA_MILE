// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {

  

//   constructor(private httpclient:HttpClient) { }

//   baseUrl:String="http://localhost:9797/bookingRest/api";
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  email:any;
  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";

  getBookingsByMailId(mailId:string) {
    return this.httpclient.get(this.baseUrl+ '/bookingByEmail/' + mailId)
  }

  addNewBooking(bookings:Booking)
  {
    return this.httpclient.post(this.baseUrl+"/booking",bookings);
  }

  fetchproducts(emailid:string)
  {
    return this.httpclient.get(this.baseUrl+"/bookingByEmail/"+emailid)
  }
  deletebooking(bookingId:string)
  {
    return this.httpclient.delete(this.baseUrl+"/DeleteBookingDetails/"+bookingId)
  }
  fetchBookingsbydatelimit(date1:Date,date2:Date){
    return this.httpclient.get(this.baseUrl+"/getbookingsbylimit/"+date1+"/"+date2);
  }

  getallBookingHistory(){
    return this.httpclient.get(this.baseUrl+"/bookingHistory");
  }
  
}





  
