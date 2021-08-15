import { Component, OnInit } from '@angular/core';
import { Busroutes } from '../busroutes';
import { BusroutesService } from '../busroutes.service';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-newbusroute',
  templateUrl: './newbusroute.component.html',
  styleUrls: ['./newbusroute.component.css']
})
export class NewbusrouteComponent implements OnInit {
  route:any;
  
  constructor(private busrouteservice:BusroutesService) {
    this.route=new Busroutes();
   }

  ngOnInit(): void {
  }
  saveData(){
    this.busrouteservice.addNewRoute(this.route).subscribe(
      (data)=>{
        console.log(data);
        alert("Route Added");
      }
    )
  }
  

}
