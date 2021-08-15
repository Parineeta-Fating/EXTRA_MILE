import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from './user-details';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  
  constructor(private httpclient:HttpClient) { }

  baseUrl:String="http://localhost:9797/bookingRest/api";


searchUserDetailsById(mailid:string)
{
  return this.httpclient.get(this.baseUrl+"/userloginbymid/"+mailid)
}

  getAllUserDetails()
  {
    return this.httpclient.get(this.baseUrl+"/userdetails");
  }
 
  
  addNewUserDetails(userdetails:UserDetails)
  {
    return this.httpclient.post(this.baseUrl+"/userdetails",userdetails);
  }

  getUserDetails(userid:string) {
    return this.httpclient.get(this.baseUrl + "/userdetails/" + userid)
  }
  updateUserDetails(userDetails:UserDetails){
   //alert("updated");
   return this.httpclient.put(this.baseUrl+"/userdetails", userDetails);
 }
 fetchWallet(mailId:string){
  return this.httpclient.get(this.baseUrl+"/walletinfo/"+mailId)
}
getonlyUserDetails(){
  return this.httpclient.get(this.baseUrl+"/getonlyuserdetails");
}
}


 //vishnu

//  import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { UserDetails } from './user-details';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserDetailsService {

  


//   constructor(private httpclient:HttpClient) {
   
//    }

//     baseUrl:String="http://localhost:9797/bookingRest/api";
//    getUserDetails(userid:string) {
//      return this.httpclient.get(this.baseUrl + "/userdetails/" + userid)
//    }
//    updateUserDetails(userDetails:UserDetails){
//     //alert("updated");
//     return this.httpclient.put(this.baseUrl+"/userdetails", userDetails);
  
    
//   }


// }