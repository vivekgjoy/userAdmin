import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userAdmin';
  

  constructor(public router:Router){

  }

  gotoAdmin(){
    this.router.navigate(['/home'])
  }
 

}
