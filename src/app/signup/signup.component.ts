
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  nuser:UserDetails;
 
  constructor(private userservice:UserDetailsService, private router:Router) { 

    this.nuser=new UserDetails();
  }
 
  ngOnInit(): void {
  }
 
  saveUserData()
  {
      this.nuser.role="user";
      this.nuser.wallet=0;
      this.userservice.addNewUserDetails(this.nuser).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data); 

        }
      )
      alert("Signup Successfull!! ");
      this.router.navigate(['userlogin']);

}
}