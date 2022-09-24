import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  qty=1;
  status = 'available';
  list = [
    {
        name : 'samsung',
        price : 10000,
        status : 'available'
    },
    {
      name : 'nokia',
      price : 20000,
      status : 'available'
    },
    {
      name : 'sony',
      price : 30000,
      status : 'not-available'
     },
     {
      name : 'LG',
      price : 15000,
      status : 'available'
    },
    {
      name : 'whirlfool',
      price : 18000,
      status : 'not-available'
    },
    ]
    
  quantity(){
    
  }

}
