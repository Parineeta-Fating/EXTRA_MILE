import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';


import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {
 // feedback:Feedback;
  
 
  
  constructor(private feedbackService:FeedbackService) {
  //   this.feedback = new Feedback();
  //   //this.feedback.busId = "2001";
    
  //   //this.feedback.busId=sessionStorage.getItem("busIdForStorage");
  // }
  // busIdForFeedback:string=sessionStorage.getItem("busIdForStorage")==null?'':sessionStorage.getItem("busIdForStorage");
  
  // ngOnInit(): void {
  // }
  // addFeedback() {
  //   this.feedback.busId=sessionStorage.getItem("busIdForStorage")==null?'':sessionStorage.getItem("busIdForStorage");
  //   console.log("bus"+ sessionStorage.getItem("busIdForStorage"));
  //   //this.feedback.busId="2001";
  //   this.feedbackService.addFeedback(this.feedback).subscribe((data)=> {
     
  //     console.log("feedback is" + data);
  //     alert("Thankyou for your Feedback!!");
    
  //   }
  //   )
  // }
}
}
  

