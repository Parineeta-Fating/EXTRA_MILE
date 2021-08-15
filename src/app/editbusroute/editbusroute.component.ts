import { Component, OnInit } from '@angular/core';
import { Busroutes } from '../busroutes';
import { BusroutesService } from '../busroutes.service';

@Component({
  selector: 'app-editbusroute',
  templateUrl: './editbusroute.component.html',
  styleUrls: ['./editbusroute.component.css']
})
export class EditbusrouteComponent implements OnInit {

  constructor(private routeservice:BusroutesService) {

    this.route=new Busroutes();
   }
   routeid:any;
   route:Busroutes;

  ngOnInit(): void {
    this.routeid=localStorage.getItem("routeid");
    this.routeservice.searchRouteById(this.routeid).subscribe(
      (data)=>{
        this.route=data as Busroutes;
      }
    )
  }
  saveData(){
    this.routeservice.updateRoute(this.route).subscribe(
      (data)=>{console.log("Data is Updated")}
      
    )
    alert("Route Updated")
  }

}
