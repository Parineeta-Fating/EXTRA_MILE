// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BusService {

  

//   constructor(private httpclient:HttpClient) { }

//   baseUrl:String="http://localhost:9797/bookingRest/api";
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  
  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";

  
  getBusByBusId(busId:string) {
    return this.httpclient.get(this.baseUrl + '/busByBusId'+busId)
  }

  fetchproducts(routeId:string){
    return this.httpclient.get(this.baseUrl+"/busbyri/"+routeId)
  }
  fetchproducts1(routeId:string,date:Date){
    return this.httpclient.get(this.baseUrl+"/busbyr/"+routeId+"/"+date)
  }

  // editBus(bu:Bus){
  //   return this.httpclient.put(this.baseUrl+"/bus",bu);
  // }
  busByBusId(busId:string){
    return this.httpclient.get(this.baseUrl+"/busByIdAnjan/"+busId)
  }
  getAllBuses(){
    return this.httpclient.get(this.baseUrl+"/bus");
  }
  addNewBus(bus:Bus){
   
    return this.httpclient.post(this.baseUrl+"/bus",bus);
  }
  searchBusById(busid:String){
    return this.httpclient.get(this.baseUrl+"/bus/"+busid);
  }
  editBus(bus:Bus){
    return this.httpclient.put(this.baseUrl+"/bus",bus);
  }
  deleteBus(busid:any){
    return this.httpclient.delete(this.baseUrl+"/bus/"+busid);
  }

}
