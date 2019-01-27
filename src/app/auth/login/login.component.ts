import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'node_modules/md5-typescript';
import { CookieService } from 'node_modules/ngx-cookie-service';

interface hashAuth {
  login: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminForm = new FormGroup({
    loginInput: new FormControl('', Validators.required),
    passwordInput: new FormControl('', Validators.required),
  });

  isErrAuth = false;
  salt: string = "s6f82jdl";
  authData: hashAuth = {
    login: "593470079a749b96a86805cefce3d1be", 
    password: "999f708291df94ba6cadfb3445d406ca"
  };
  input: hashAuth = {login: "", password: ""};


  constructor(public authService: AuthService, public router: Router, private cookieService: CookieService ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn && this.isVerifyForm()) {
        this.cookieService.set("enableDashboard", "true");
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigate([redirect]);
        this.isErrAuth = false;
      } else {
        this.isErrAuth = true;
      }
    });
  }

  isVerifyForm(): boolean {
    this.input.login = Md5.init(this.adminForm.get('loginInput').value + this.salt);
    this.input.password = Md5.init(this.adminForm.get('passwordInput').value + this.salt);

    if (this.input.login === this.authData.login && this.input.password === this.authData.password) 
      return true;
    else return false;
  }
}