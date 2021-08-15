// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-adminlogin',
//   templateUrl: './adminlogin.component.html',
//   styleUrls: ['./adminlogin.component.css']
// })
// export class AdminloginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  srchId:string="";
  passw:string="";
  au:any;
  
  constructor(private userService:UserDetailsService, private router:Router) { 
   
  }

  ngOnInit(): void {
  }

  searchById()
  {
    this.userService.searchUserDetailsById(this.srchId).subscribe(
      (data)=>
    {
      console.log(data);
      this.au=data;
    }
    )
    this.checkuser()
  }
  checking:string='';
  userIdForStorage:string='';
  checkpass()
  {
    if(this.au.password==this.passw)
    {
        this.checking='matched';
        //sessionStorage.setItem
        alert("Login Successful!! ");
    }
    else{
      this.checking="Please enter correct password";
    }
    if(this.checking=='matched' && this.au.role=='admin')
    {
      this.userIdForStorage=this.au.userId;
      sessionStorage.setItem('userIdForStorage',this.userIdForStorage);
      this.router.navigate(['admindashboard']);
      
    }
    else{
      this.adminchecking="You are not an admin!";
    }
   
  }
    checkuser()
    {
      if(this.au==null)
      {
        this.checking="Login Id not found!"
      }
      else{
        this.checkpass()
      }
    }

    
 
  adminchecking:string="";

  




  formSubmit(loginForm:any)
{
  console.log(loginForm.value);
  
}

}