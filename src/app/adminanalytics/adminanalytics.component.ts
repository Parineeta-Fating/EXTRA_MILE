import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { FeedbackService } from '../feedback.service';
import { PassengerService } from '../passenger.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-adminanalytics',
  templateUrl: './adminanalytics.component.html',
  styleUrls: ['./adminanalytics.component.css']
})
export class AdminanalyticsComponent implements OnInit {

  
  date1:Date=new Date();
  date2:Date=new Date();
  showbookings:boolean=false;
  showuser:boolean=false;
  showbookhist:boolean=false;
  showpasshist:boolean=false;
  showfeedhist:boolean=false;
  bookings:any;
  user:any;
  bookhist:any;
  passhist:any;
  feedhist:any;
  
  constructor(private adbookingservice:BookingService,
              private aduserservice:UserDetailsService,
              private adpassservice:PassengerService,
              private adfeedbackservice:FeedbackService) { }

  ngOnInit(): void {
  
}

  
fetchbookingsbydates(){
  this.adbookingservice.fetchBookingsbydatelimit(this.date1,this.date2).subscribe((data:any)=>{
    console.log(data);
    this.bookings=data;
   
  })

}
fetchbookings(){
  this.showbookings=true;
  this.showuser=false;
  this.showbookhist=false;
  this.showpasshist=false;
  this.showfeedhist=false;
}

fetchRegisteredUserDetails(){
  this.aduserservice.getonlyUserDetails().subscribe((data:any)=>{
    console.log(data);
    this.user=data;
  })
  }
  fetchuser(){
    this.showbookings=false;
    this.showuser=true;
    this.showbookhist=false;
    this.showpasshist=false;
    this.showfeedhist=false;
    this.fetchRegisteredUserDetails();
}

fetchalltimeBookingHistory(){
  this.adbookingservice.getallBookingHistory().subscribe((data:any)=>{
    console.log(data);
    this.bookhist=data;
  })
} 
fetchbookhist(){
    this.showbookings=false;
    this.showuser=false;
    this.showbookhist=true;
    this.showpasshist=false;
    this.showfeedhist=false;
    this.fetchalltimeBookingHistory();
}
fetchPassengerHistory(){
  this.adpassservice.getPassengerHistory().subscribe((data:any)=>{
    console.log(data);
    this.passhist=data;
  })
}
fetchpasshist(){
    this.showbookings=false;
    this.showuser=false;
    this.showbookhist=false;
    this.showpasshist=true;
    this.showfeedhist=false;
    this.fetchPassengerHistory();
}
fetchallFeedbacks(){
 this.adfeedbackservice.getUserFeedback().subscribe((data:any)=>{
   console.log(data);
   this.feedhist=data;
 }) 
}
fetchfeedhist(){
  this.showbookings=false;
  this.showuser=false;
  this.showbookhist=false;
  this.showpasshist=false;
  this.showfeedhist=true;
  this.fetchallFeedbacks();
}
}



