import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})
export class MywalletComponent implements OnInit {
  //userid:string = "5";
  //userDetails:any;
  userDetails1:any=sessionStorage.getItem('userIdForStorage');
  constructor(private userDetailservice:UserDetailsService ) { 
    this.userDetailservice.getUserDetails(this.userDetails1).subscribe((data)=>
      { 
        console.log(data);
        this.userDetails1=data
      }
    )
  }

  ngOnInit(): void {
  }

}


// export class AddpassengerComponent implements OnInit {

//   pass:Passenger;

//   constructor(private passservice:PassengerService) { 
//     this.pass=new Passenger();
//   }

//   ngOnInit(): void {
//   }

//   saveData()
//   {

//       this.passservice.addNewPassenger(this.pass).subscribe(
//         (data)=>{
//           console.log("Return Value from REST"+data); 
//         }
//       )

// }
// }