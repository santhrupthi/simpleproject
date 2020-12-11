import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servieses/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private AuthService :AuthService) { }
  islogin : boolean ;

  ngOnInit() {
this.islogin = this.AuthService.isUserLogin();
  }

}
