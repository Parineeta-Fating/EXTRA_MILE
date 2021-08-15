import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-showpassenger',
  templateUrl: './showpassenger.component.html',
  styleUrls: ['./showpassenger.component.css']
})
export class ShowpassengerComponent implements OnInit {
  
  pass:any;

  constructor(private passengerService:PassengerService,private router:Router) { }

  

ngOnInit(): void {

  this.passengerService.getAllPassengers().subscribe((data:any)=>
  {
      console.log(data);
      this.pass=data;
      console.log(this.pass);
  })
}

editInfo(passengerId:any)
{
localStorage.setItem("passengerId",passengerId);
this.router.navigate(['updatepassenger']);

}
deleteRow(passengerId:any)
{
this.passengerService.deletePassenger(passengerId).subscribe(
(data)=> {console.log(data)}
)
this.router.navigate(['showpassengers']);

}
}

