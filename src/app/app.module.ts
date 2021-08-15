import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchpassengerComponent } from './searchpassenger/searchpassenger.component';
import { UpdatepassengerComponent } from './updatepassenger/updatepassenger.component';
import { ShowpassengerComponent } from './showpassenger/showpassenger.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


import { MywalletComponent } from './mywallet/mywallet.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ProfileComponent } from './profile/profile.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { NewbusrouteComponent } from './newbusroute/newbusroute.component';
import { NewbusComponent } from './newbus/newbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { ShowallbusesComponent } from './showallbuses/showallbuses.component';

import { AddnewseatsComponent } from './addnewseats/addnewseats.component';
import { AdminanalyticsComponent } from './adminanalytics/adminanalytics.component';
import { ShowallbusroutesComponent } from './showallbusroutes/showallbusroutes.component';
import { EditbusrouteComponent } from './editbusroute/editbusroute.component';
import { SignoutComponent } from './signout/signout.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    AddpassengerComponent,
    PaymentComponent,
    SearchpassengerComponent,
    UpdatepassengerComponent,
    ShowpassengerComponent,
    UserloginComponent,
    SignupComponent,
    AdminloginComponent,
    MydashboardComponent,
    MybookingsComponent,
    ProfileComponent,
    MywalletComponent,
    FeedbackComponent,
    ChangepasswordComponent,
    CancelbookingComponent,
    AdmindashboardComponent,
    ShowallbusroutesComponent,
    NewbusrouteComponent,
    NewbusComponent,
    EditbusComponent,
    ShowallbusesComponent,
    EditbusrouteComponent,
    AddnewseatsComponent,
    AdminanalyticsComponent,
    SignoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
