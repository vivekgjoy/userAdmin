import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  qty='available';
  qty1 ='not-available';
  status = 'available';

  isAdmin = true;
  message = 'Authorized persons only';

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
    
    gotouser(){
      alert(this.message);
  }
  gotoServices(){
    this.router.navigate(['/services'])
  }
  gotoHome(){
    this.router.navigate(['/home'])
  }

}
