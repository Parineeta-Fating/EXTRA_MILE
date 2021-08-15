
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from '../user-details';

import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  
  oldPassword:any;
  firstPassword:any;
  secondPassword:any;
  userId:any=sessionStorage.getItem('userIdForStorage');

 
   userDetails:any;

   constructor(private userDetailsService:UserDetailsService) {

    this.userDetails=new UserDetails();
   }

   ngOnInit(): void {
    //this.userId=localStorage.getItem("userId");
    this.userDetailsService.getUserDetails(this.userId).subscribe(
      (data)=>{
        this.userDetails=data as UserDetails;
        console.log(data);
      }
    )
  }

  changePass(){
    this.userDetails.password = this.secondPassword;
    this.userDetailsService.updateUserDetails(this.userDetails).subscribe(
      (data)=>{
        console.log("Data is Updated");
        
        
    }
    )
    alert("Password changed!!");
  }
  @ViewChild("submit") button:any;
  

  validateOldPass() {
    if(this.oldPassword == this.userDetails.password) {
      console.log(this.oldPassword);
      console.log(this.userDetails.password);
      console.log("validate");
    }
    // else {
    //   document.getElementById("submit").disabled = true;
    // }
  }
}
 