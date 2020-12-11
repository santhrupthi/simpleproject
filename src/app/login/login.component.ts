import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User('rob','rol','thrupthi@gamil.com','',true)
  loginclick(){
    alert(this.username);
;  }
}
  