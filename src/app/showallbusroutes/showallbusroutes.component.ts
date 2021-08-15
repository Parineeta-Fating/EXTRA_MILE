import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusroutesService } from '../busroutes.service';

@Component({
  selector: 'app-showallbusroutes',
  templateUrl: './showallbusroutes.component.html',
  styleUrls: ['./showallbusroutes.component.css']
})
export class ShowallbusroutesComponent implements OnInit {

  route:any;
  constructor(private busrouteService:BusroutesService,private router:Router) { }

  ngOnInit(): void {
    this.busrouteService.getAllRoutes().subscribe((data:any)=>{
      console.log(data);
      this.route=data;
      console.log(this.route);
    })
    
  }
  editInfo(routeid:any){
    console.log(localStorage.setItem("routeid",routeid));
    localStorage.setItem("routeid",routeid);
    this.router.navigate(['admindashboard/editroute']);
  }
  deleteRow(routeid:any){
    this.busrouteService.deleteRoute(routeid).subscribe(
      (data)=>{console.log(data)}
    )
    alert("ROUTE DELETED")
    this.router.navigate(['admindashboard/busroutes']);
  }


}
