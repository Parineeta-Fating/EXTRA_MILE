import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-updatepassenger',
  templateUrl: './updatepassenger.component.html',
  styleUrls: ['./updatepassenger.component.css']
})
export class UpdatepassengerComponent implements OnInit {

  constructor(private pservice:PassengerService) { 
    this.pass=new Passenger();
  }
 
  passengerId :any;
  pass:Passenger;


  ngOnInit(): void 

    {
      this.passengerId=localStorage.getItem("passengerId");
      this.pservice.searchPassengerById(this.passengerId).subscribe(
        (data)=>{
          this.pass=data as Passenger;
        }
      )
   }

   saveData()
   {
     this.pservice.updatePassenger(this.pass).subscribe
     (
       (data)=>{ console.log(' Data Updated')}
     )
   }
  

}
