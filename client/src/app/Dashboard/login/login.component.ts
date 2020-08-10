import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;  
  message: string;  
  returnUrl: string;
  public error: string;  
  constructor(
        private fb : FormBuilder,  
        private router : Router,  
        private _service : AuthService ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({  
      userid: ['', Validators.required],  
      password: ['', Validators.required]  
   });  
    this.returnUrl = '/dashboard';  
    this._service.logout();
    
  }

  get f() { return this.loginForm.controls; }  

  login() {  
  
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
       return;  
    }  
    else {  
       this._service.login2(this.f.userid.value,this.f.password.value);
      }  
    }  

    logins(){
      this._service.login2(this.f.userid.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['dashboard']),
        err => this.error = 'Could not authenticate'
      );
      /*.subscribe((response) => {
        this._service.setUserInfo({'user' : response['user']});
        this.router.navigate(['dashboard']);
  
      })*/
    }
  

}
