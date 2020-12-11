import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EmptyNullPipe } from './pipes/emptyNull.pipe';
import { LemitedvaluePipe } from './pipes/lemitedvalue.pipe';
import { Filter_bikePipe } from './pipes/filter_bike.pipe';
import { ParentComponent } from './monday/parent/parent.component';
import { ChildComponent } from './monday/child/child.component'
import { from } from 'rxjs';

import { ChildComponemtComponent } from './childComponemt/childComponemt.component';
import { CustomPipePipe } from './pipes/customPipe.pipe'
import { ContentComponent } from './content/content.component';
import { CommomnService } from './servieses/commomn.service';
import { HttprequestService } from './servieses/httprequest.service';
import { HttpClientModule } from "@angular/common/http";
import { Morning_sessionComponent } from './morning_session/morning_session.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { FeatureComponent } from './feature/feature.component';
import { NotifyService } from './servieses/notify.service';
import { CanActivateProductDetailsService } from './servieses/CanActivateProductDetails.service'
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ResolveService } from './servieses/resolve.service'
import { ReloginComponent } from './relogin/relogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';
import {AuthService} from './servieses/auth.service'
import {IsUserLoginService} from './servieses/isUserLogin.service';
import { FormDevComponent } from './formDev/formDev.component';
import {NewAuthService} from './servieses/newAuth.service';
import { NavigationComponent } from './navigation/navigation.component'
@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    TestComponent,
    AssignmentComponent, EmptyNullPipe, LemitedvaluePipe, Filter_bikePipe,
    ChildComponemtComponent, ParentComponent, ChildComponent, CustomPipePipe,
    ContentComponent,
    Morning_sessionComponent,
    HomeComponent,
    ProductDetailsComponent,
    FeatureComponent,
    ReloginComponent,
    RegistrationComponent,
    NavComponent,
      FormDevComponent,
      NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: "assignment",
        component: AssignmentComponent
      },
      
      {
        path: "product",
        component: ParentComponent,
        // canActivate :[IsUserLoginService]
      },
      {
        path: "feature",
        component: FeatureComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        canActivate: [CanActivateProductDetailsService],
        resolve: {
          product: ResolveService,
        },
      },
      {
        path: "relogin",
        component: ReloginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: "",
        component: ReloginComponent
      },
      {
        path: "**",
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [CommomnService, HttprequestService, NotifyService,IsUserLoginService, CanActivateProductDetailsService,AuthService,NewAuthService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
