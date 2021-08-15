// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FeedbackService {



//   constructor(private httpclient:HttpClient) { }

//   baseUrl:String="http://localhost:9797/bookingRest/api";
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";
  addFeedback(feedback:Feedback) {
    return this.httpclient.put(this.baseUrl+ '/feedback',feedback);
  }
  getUserFeedback(){
    return this.httpclient.get(this.baseUrl+"/customerFeedbacks");
  }
}
