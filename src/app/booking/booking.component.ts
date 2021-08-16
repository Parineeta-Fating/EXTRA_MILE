// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.css']
// })
// export class BookingComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { RoutesService } from '../routes.service';
import { Seats } from '../seats';
import { SeatsService } from '../seats.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  gender:string="";
  constructor(private busservice:BusService , private routeservice:RoutesService,
     private seatcservice:SeatsService,private passservice:PassengerService, private bookingservice:BookingService,
     private userservice:UserDetailsService, private paymentservice:PaymentService ) { 

      this.pass = new Passenger();
      this.bo=new Booking();
      this.bo.feedbackId="";
      this.bo.availability=10;
      this.updatebus=new Bus();
      this.bo.noOfTickets=0;
      this.updateSeat=new Seats();
      this.bo.emailId="";
      this.payment=new Payment();
     }

  showOtherFunctions:boolean=false;
  bus:any;
  payment:Payment;

  PaymentOption:string="";
  isBooked:any;
  ispassengeradded:any;
  
  routes:any;
  routeId:string="";
  date1:Date = new Date();
  busidforseats:string="";
  seats:any;
  updatebus:Bus;
  seatIdForPassenger:string="";
  updateSeat:Seats;
  pass:Passenger;
  bo:Booking;
  ticketquantity:number=1;
  mailidforwallet:string="";
  showTicket:boolean=false;
  selectedBus:any;

  bookingIdCreated=false;

  ngOnInit(): void {
    this.routeservice.fetchroutes().subscribe((data1)=>
    {

      console.log(data1);
      this.routes=data1;
      
      

    })
  }

  search(){
  this.busservice.fetchproducts(this.routeId).subscribe((data)=>
    {

      console.log(data);
      this.bus=data;
    })
  }

  
  searchForBus(){
    this.busservice.fetchproducts1(this.routeId,this.date1).subscribe((data)=>
    {
      console.log(data);
      this.bus=data;
      this.showOtherFunctions=true;

    })
  }

  updateID(s:string){
    this.routeId=s;
  }

  searchforSeats(){
    this.seatcservice.fetchseats(this.busidforseats).subscribe((data)=>
    {
      this.seats=data;
    })
    this.busservice.busByBusId(this.busidforseats).subscribe((data3)=>
    {
      this.selectedBus=data3;
    })
  }

  
  saveBookingData()
  {
    
    this.bo.bookingId=this.busidforseats+this.seatIdForPassenger;
    this.pass.passengerId=this.seatIdForPassenger+this.busidforseats;
    this.bo.status="booked";
    this.pass.bookingId=this.bo.bookingId;
    this.bo.noOfTickets=1;
    //this.bo.DateOfTravek=this.selectedBus.departuredate;

    this.bookingservice.addNewBooking(this.bo).subscribe(
    
      (data1)=>{
        console.log("Return Value from REST"+data1); 
        this.isBooked=data1;
        alert("Passenger added successfully!! "); 
    
      }
    )
    this.bookingIdCreated=true;

    this.getWallet();


  }

  i:number=1;
  savepassenger(){
    this.pass.passengerId=this.seatIdForPassenger+this.busidforseats;
    this.passservice.addNewPassenger(this.pass).subscribe(
      (data1)=>{
        console.log("Return Value from REST"+data1); 
        this.ispassengeradded=data1;
        //alert("Passenger added successfully!! ");
      }
    )
    this.updateSeats();
   this.savePayment();

    for(this.i=1;this.i<10000000;this.i++){

    }
    this.viewTicket();
    // if(this.isBooked==true &&this.ispassengeradded==true){
    //   alert("ticket booked")
    // }

    // if(this.isBooked==true &&this.ispassengeradded==true){
    //   alert("ticket booked")
    //   this.showTicket=true;
    //   this.isitSuccessfull="is Successfull"
    // }
    // else{
    //   this.isitSuccessfull="has Failed"
    // }
  }
 
 

  updateSeats(){
    this.updateSeat.busId=this.busidforseats;
    this.updateSeat.seatId=this.pass.seatId;
    this.updateSeat.availability=0;
    this.seatcservice.updateSeats(this.updateSeat).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data);
      }
    )
  }

  walletBalance:any;
  getWallet(){


    this.userservice.fetchWallet(this.bo.emailId).subscribe(
      (data)=>{
        this.walletBalance=data==null?0:data;
        console.log(data)
      } 
    )
  }
  isitSuccessfull:string="";
  iloop:number=0;
  viewTicket(){
    if(this.isBooked==true &&this.ispassengeradded==true){
      this.showTicket=true;
      this.isitSuccessfull="is Successful"
    }
    else{
      this.isitSuccessfull="has Failed"
    }

  }

  isPaymentDone:boolean=false;
  savePayment(){
    this.payment.amountPaid=this.selectedBus.fare
    this.payment.bookingId=this.bo.bookingId;
    this.payment.paymentId=this.bo.bookingId+"10";
    this.payment.paymentMode=this.PaymentOption;
    this.paymentservice.addNewpayment(this.payment).subscribe(
      (data1)=>{
        console.log("Return Value from REST"+data1); 
        this.isPaymentDone=true;
        alert("Payment received successfully!! ");
      }
    )

  }

//   print(): void {
//     let printContents, popupWin;
//     printContents = document.getElementById('print-section').innerHTML;
//     popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
//     popupWin.document.open();
//     popupWin.document.write(`
//       <html>
//         <head>
//           <title>Print tab</title>
//           <style>
//           //........Customized style.......
//           </style>
//         </head>
//     <body onload="window.print();window.close()">${printContents}</body>
//       </html>`
//     );
//     popupWin.document.close();
// }

}