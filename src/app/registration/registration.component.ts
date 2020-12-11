import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators  } from '@angular/forms';
import { from } from 'rxjs';
import {NewAuthService} from '../servieses/newAuth.service';
import {IUserToken} from '../models/user_token.interface'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  FormDatas = FormGroup;
  constructor(private formBuilder: FormBuilder ,private NewAuthService :NewAuthService) { }
  registerForm : FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      grant_type:new FormControl('',[Validators.required])
    })
  }
  get f() { return this.registerForm.controls; }

  grant_type:string = "password";
 
 
  loginForm(formObj){
    let values = formObj.value;

     console.log(values);
    //values.push{ //'dbm':'jjrt'}
    // this.AuthService.UserLogin(values).subscribe(  (data: any)=>{
    //   console.log('status changing',data);
    //   alert('data coming');
    // },
    // (error)=>{
    //   alert('data not coming');
    //   console.log('status error',);
    // }

    console.log("Login form submitted", values);
    this.NewAuthService
      .getUserToken("trupthiishetty1990@gmail.com", "shetty@123")
      .subscribe((response: IUserToken) => {
        console.log('response coming',response);

        // this.AuthService.doLogin(response);
        // this.router.navigate(["/products"]);
      });
    
    
   
  }

}
