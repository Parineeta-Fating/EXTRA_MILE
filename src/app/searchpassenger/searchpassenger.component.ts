import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-searchpassenger',
  templateUrl: './searchpassenger.component.html',
  styleUrls: ['./searchpassenger.component.css']
})
export class SearchpassengerComponent implements OnInit {

  srchId:string="";
  pass:any;

  constructor(private pService:PassengerService) { }

  ngOnInit(): void {
  }

  searchById()
  {
    this.pService.searchPassengerById(this.srchId).subscribe(
      (data)=>
      {
        console.log(data);
        this.pass=data;
      }
    )
  }

}



