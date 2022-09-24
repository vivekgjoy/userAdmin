import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alert ='Authorized Persons Only';

  constructor( public router:Router) { }

  ngOnInit(): void {
  }
  gotoAdmin(){
    this.router.navigate(['/admin'])
  }
  gotouser(){
    alert(this.alert);
  }
 

}
