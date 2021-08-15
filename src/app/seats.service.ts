import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seats } from './seats';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  
  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";

  fetchseats(busid:string){
    return this.httpclient.get(this.baseUrl+"/seatbybus/"+busid)
  }

  updateSeats(seat:Seats)
  {
    return this.httpclient.post(this.baseUrl+"/seats",seat);
  }

  updateSeatsRecordBySeatId(seats:Seats)
  {
    return this.httpclient.put(this.baseUrl+'/seatsMadhu',seats)
  }
  addNewSeat(seat:Seats){
    return this.httpclient.post(this.baseUrl+"/seats",seat);
      }
    
      deleteSeats(busid:String){
        return this.httpclient.delete(this.baseUrl+"/deleteallseats/"+busid);
      }

}


