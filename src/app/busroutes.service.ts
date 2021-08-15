import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Busroutes } from './busroutes';

@Injectable({
  providedIn: 'root'
})
export class BusroutesService {

  constructor(private httpclient:HttpClient) { }
  baseUrl:String="http://localhost:9797//bookingRest/api";

  getAllRoutes(){
    return this.httpclient.get(this.baseUrl+"/routes");
  }
  deleteRoute(routeid:any){
    return this.httpclient.delete(this.baseUrl+"/routes/"+routeid);
  }
  addNewRoute(busroute:Busroutes){
    return this.httpclient.post(this.baseUrl+"/routes",busroute);
  }
  updateRoute(route:Busroutes){
    return this.httpclient.put(this.baseUrl+"/routes",route);
  }
  searchRouteById(routeid:String){
    return this.httpclient.get(this.baseUrl+"/routes/"+routeid);
  }
}
