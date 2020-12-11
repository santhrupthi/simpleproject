import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import {CommomnService} from '../servieses/commomn.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private getData :CommomnService ;
  constructor() { 
    this.getData = new CommomnService();
  }
@Input() header : string;
hideheader :boolean = true;
product = [];
  ngOnInit() {
    this.product = this.getData.getProduct();
    console.log('in onther pqage ' ,this.product);
  }

}
