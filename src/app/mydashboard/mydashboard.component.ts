import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent implements OnInit {
  
  userDetails:any=sessionStorage.getItem('userIdForStorage');
  //userid= localStorage.getItem('userIdForStorage');
  //localStorage.setItem("userid",userid);
  constructor(private userDetailservice:UserDetailsService) {
    this.userDetailservice.getUserDetails(this.userDetails).subscribe((data)=>
      {
        console.log(data);
        this.userDetails=data       
      }
    )
   }

  ngOnInit(): void {
   
  }

}
