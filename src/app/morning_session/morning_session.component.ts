import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CommomnService} from '../servieses/commomn.service'

@Component({
  selector: 'app-morning_session',
  templateUrl: './morning_session.component.html',
  styleUrls: ['./morning_session.component.scss']
})
export class Morning_sessionComponent implements OnInit {
private getdata : CommomnService;
proct = [];
  constructor() { 
    this.getdata = new CommomnService();
  }

  ngOnInit() {
    this.proct = this.getdata.getProduct();
  }

}
