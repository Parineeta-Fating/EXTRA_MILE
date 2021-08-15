import { Component, OnInit } from '@angular/core';
import { Seats } from '../seats';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-addnewseats',
  templateUrl: './addnewseats.component.html',
  styleUrls: ['./addnewseats.component.css']
})
export class AddnewseatsComponent implements OnInit {

  seat:Seats;
  constructor(private seatservice:SeatsService) {
    this.seat=new Seats();
   }

  ngOnInit(): void {
  }
saveData(){
  this.seatservice.addNewSeat(this.seat).subscribe(
    (data)=>{
      console.log("Seat Added"+data);
    }
  )
  alert("Seat Added")
}
}
