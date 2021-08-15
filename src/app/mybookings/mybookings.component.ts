
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';



import { BookingService } from '../booking.service';

import { BusService } from '../bus.service';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

import { RoutesService } from '../routes.service';
import { UserDetails } from '../user-details';
//3005	23-08-21	2001	5001	2	jj@gmail.com	9191919191	08-08-21	booked	
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  
  //mailId:string = UserDetails1.mailId

  userDetails1:any=sessionStorage.getItem('userMailForStorage');
  bookingId:any;
  busId:any;
  routeId:any;
  bookings:any;
  busIdForStorage:string='';
  feedbackMsg:string='';
  feedback:Feedback;

  // buses:Bus;
  // route:Routes;
  router:any;
  constructor(private bookingService:BookingService,private busService:BusService,private routesService:RoutesService, router:Router,private feedbackService:FeedbackService) {
     this.bookings = new Booking();
     this.busIdForStorage=this.bookings.busId;
    this.router=router;
    this.feedback=new Feedback();
    //this.bookings.busId='';
  }
  //this.busId = this.bookings.busId ;
  ngOnInit(): void {
    this.bookingService.getBookingsByMailId(this.userDetails1).subscribe((data)=>{
      this.bookings = data;
      console.log(data);
      
    })
  }
    
    feedbackButton() {
      //sessionStorage.setItem("busIdForStorage",this.busIdForStorage);
      this.feedback.busId=this.busIdForStorage;
      this.feedback.feedbackId=this.userDetails1 + this.busIdForStorage;
      this.feedback.feedbackMsg=this.feedbackMsg;
      
      this.feedbackService.addFeedback(this.feedback).subscribe((data:any)=> {
     
        console.log("feedback is" + data);
        alert("Thankyou for your Feedback!!");
      
      }
      )
      //this.router.navigate(["feedback"]);
    }
    viewAllBookings(){
      this.bookingService.getBookingsByMailId(this.userDetails1).subscribe((data)=>{
        this.bookings = data;
        console.log(data);
        
      })
    }
      // this.busService.getBusByBusId(this.busId).subscribe((data)=> {
      //   this.buses  = data as Bus;
      //   console.log(data);
      //   this.routeId = this.buses.routeid;
      // }) 
      //   this.routesService .getRouteByRouteId(this.routeId).subscribe((data)=> {
      //     this.route = data as Routes;
          
      //   })
      }
    
    
        

  

  // // busNo:string = '101';
  // // busName:string = 'vishnu travels'
  // // source:string = 'pune';
  // // destination:string = 'mumbai';
  // // arrivalTime:string = '15:20:05';
  // // departureTime:string = '22:10:05';
  // // dateOfTravel:string = '02-05-2021';
  // constructor(private bookingService:BookingService, private busService:BusService) { }
  // email:any;
  // book:any;
  // ngOnInit(): void {
  //   this.bookingService.getBookingsByMailId().subscribe((data)=>
  //   {
  //   console.log(data);
  //   this.book = data;
  //   console.log(this.book);
  //   })
    
  // }



// array :number[];      //have to know how to implement array
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   busNo:number = 101;     //values from bus table
 
  //}