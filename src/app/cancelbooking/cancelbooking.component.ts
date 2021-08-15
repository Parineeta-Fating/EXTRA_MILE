// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cancelbooking',
//   templateUrl: './cancelbooking.component.html',
//   styleUrls: ['./cancelbooking.component.css']
// })
// export class CancelbookingComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { PassengerService } from '../passenger.service';
import { Seats } from '../seats';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  constructor(private bookingservice:BookingService, private passengerservice:PassengerService, private seatsservice:SeatsService, private router:Router) {
    this.seat=new Seats
  }

  deleted:boolean=false
  booking:any
  passenger:any
  seat:Seats

  emailId:string="";
  bookingId:string="";
  seatId:string="";

  ngOnInit(): void {
      

  }
  search(){
    this.bookingservice.fetchproducts(this.emailId).subscribe((data)=>
    {
      console.log(data);
      this.booking=data;
    })
  }
  search1(){
    this.passengerservice.fetchproducts(this.bookingId).subscribe((data)=>
    {
      console.log(data);
      this.passenger=data;
      this.seat.seatId=this.passenger.seatId;
      this.seat.busId=this.passenger.busId;

    })
  }
  delete()
  {
    this.seat.availability=1;
    this.seatsservice.updateSeatsRecordBySeatId(this.seat).subscribe((data)=>
    {
      console.log("availability updated");
      console.log(data)
    })
    this.deleted=true
    //this.passenger.splice(passenger,1);
    
  
   this.bookingservice.deletebooking(this.bookingId).subscribe((data)=>
   {
     console.log(data);
    if(confirm('Booking cancelled & Refund will be reflected within 24 hours')){
     window.location.reload()}
   })
  }
 

}
