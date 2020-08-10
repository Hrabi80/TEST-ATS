import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../../_services/auth.service';  
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  id:string;
  constructor(
    private router: Router,
    private _service: AuthService
  ) { }

  ngOnInit(): void {

    this.id = localStorage.getItem('token');

  }

  logout() {
    this._service.logout();
    this.router.navigate(['login']);
  }

}
