import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Seats } from '../seats';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-newbus',
  templateUrl: './newbus.component.html',
  styleUrls: ['./newbus.component.css']
})
export class NewbusComponent implements OnInit {
  bus:Bus;
  busid:any;
   
  
   availablecount:any;
  constructor(private busService:BusService,private seatService:SeatsService) {
    this.bus=new Bus();
     
   }

  ngOnInit(): void {
  }
  saveBus(){
    this.busService.addNewBus(this.bus).subscribe((data)=>{
      console.log(data);
      alert("Bus Added")
     
    })
    
      

   // }
    
   
  }
  

}
