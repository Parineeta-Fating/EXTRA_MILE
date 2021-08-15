import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-editbus',
  templateUrl: './editbus.component.html',
  styleUrls: ['./editbus.component.css']
})
export class EditbusComponent implements OnInit {

  constructor(private busservice:BusService) {
    this.bus=new Bus();
   }
   busid:any;
   bus:any;
  
  ngOnInit(): void {

    this.busid=localStorage.getItem("busid");
    console.log(this.busid=localStorage.getItem("busid"));
    this.busservice.searchBusById(this.busid).subscribe(
      (data)=>{
        this.bus=data;
      }
    )
  }
saveBus(){
  this.busservice.editBus(this.bus).subscribe((data)=>{
      console.log('Data is Updated')
  }
  )
  alert("Bus Updated")
}


}
