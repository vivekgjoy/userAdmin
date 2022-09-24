import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userAdmin';
  alert ='Admins only Allowed';

  constructor(public router:Router){

  }

  gotoAdmin(){
    this.router.navigateByUrl('/admin')
  }
 
  public gotoUser() {
    this.router.navigateByUrl('/root')
    alert(this.alert);
  }

}
