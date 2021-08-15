// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoutesService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";

  public getRouteByRouteId(routeId:string) {
    return this.httpclient.get(this.baseUrl + '/routesByRouteId/{routeId}')

  }
  fetchroutes(){
    return this.httpclient.get(this.baseUrl+"/routes")
  }
}

