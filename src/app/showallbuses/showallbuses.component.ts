import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-showallbuses',
  templateUrl: './showallbuses.component.html',
  styleUrls: ['./showallbuses.component.css']
})
export class ShowallbusesComponent implements OnInit {
 bus:any;
 
  constructor( private busService:BusService,private router:Router,private seatservice:SeatsService) { 
    
  }

  ngOnInit(): void {
    this.busService.getAllBuses().subscribe((data:any)=>{
      console.log(data);
      this.bus=data;
      console.log(this.bus);
    })
  }
  editInfo(busid:any){
    console.log(busid);
    console.log(localStorage.setItem("busid",busid));
    localStorage.setItem("busid",busid);

    this.router.navigate(['admindashboard/editbus']);
  }
  deleteEntry(busid:any){
    this.busService.deleteBus(busid).subscribe(
      (data)=>{console.log(data)}
    )
    
    this.router.navigate(['admindashboard/showbuses']);

  }
  deleteSeatsData(busid:any){
    this.seatservice.deleteSeats(busid).subscribe((data)=>{console.log(data)})
    alert("SEATS DELETED")
    this.router.navigate(['admindashboard/showbuses']);
  }

}
