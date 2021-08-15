import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewseatsComponent } from './addnewseats/addnewseats.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { AdminanalyticsComponent } from './adminanalytics/adminanalytics.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditbusComponent } from './editbus/editbus.component';
import { EditbusrouteComponent } from './editbusroute/editbusroute.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { NewbusComponent } from './newbus/newbus.component';
import { NewbusrouteComponent } from './newbusroute/newbusroute.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchpassengerComponent } from './searchpassenger/searchpassenger.component';
import { ShowallbusesComponent } from './showallbuses/showallbuses.component';
import { ShowallbusroutesComponent } from './showallbusroutes/showallbusroutes.component';
import { ShowpassengerComponent } from './showpassenger/showpassenger.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatepassengerComponent } from './updatepassenger/updatepassenger.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'showpassengers',component:ShowpassengerComponent},
  {path:'addpassenger',component:AddpassengerComponent},
  {path:'updatepassenger',component:UpdatepassengerComponent},
  {path:'search',component:SearchpassengerComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'myBookings',component:MybookingsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'myWallet',component:MywalletComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'mydashboard', component:MydashboardComponent},
  {path:'book', component:BookingComponent},
  {path: 'cancel', component:CancelbookingComponent},
  {path:'admindashboard/showbuses',component:ShowallbusesComponent},
  {path:'admindashboard/newbus',component:NewbusComponent},
  {path:'admindashboard/editbus',component:EditbusComponent},
  {path:'admindashboard/busroutes',component:ShowallbusroutesComponent},
  {path:'admindashboard/addroute',component:NewbusrouteComponent},
  {path:'admindashboard/editroute',component:EditbusrouteComponent},
  {path:'admindashboard/addseat',component:AddnewseatsComponent},
  {path:'admindashboard/adminanalytics',component:AdminanalyticsComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'signout', component:SignoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
