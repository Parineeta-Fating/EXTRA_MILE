


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  srchId:string="";
  passw:string="";
  u:any;
  busIdForStorage:string='';
  
  
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
      this.u=data;
    }
    )
    
    this.checkuser()
    
  }
  checking:string='';
  userIdForStorage:string='';
  userMailForStorage:string='';
  checkpass()
  {
    if(this.u.password==this.passw)
    {
        this.checking='matched';
        //sessionStorage.setItem
    }
    else{
      this.checking="Please enter correct password";
    }
    if(this.checking=='matched')
    {
      this.userIdForStorage=this.u.userId;
      sessionStorage.setItem('userIdForStorage',this.userIdForStorage);
      this.userMailForStorage=this.u.mailId;
      sessionStorage.setItem('userMailForStorage',this.userMailForStorage);
      alert("Login Successful!!");
      this.router.navigate(['mydashboard']);


    }

    
  }
  checkuser()
    {
      
      

      if(this.u==null)
      {
        this.checking="";
      }
      else{
        this.checkpass()
      }
    }

     


  formSubmit(loginForm:any)
{
  console.log(loginForm.value);
  
}

}