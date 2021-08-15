import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';
@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})
export class AddpassengerComponent implements OnInit {

  pass:Passenger;

  constructor(private passservice:PassengerService) { 
    this.pass=new Passenger();
  }

  ngOnInit(): void {
  }

  saveData()
  {

      this.passservice.addNewPassenger(this.pass).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data);
          alert("Passenger added successfully!! "); 
        }
      )
      
}
}

