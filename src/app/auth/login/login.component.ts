import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn && this.isVerifyForm()) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigate([redirect]);
        this.isErrAuth = false;
      } else {
        this.isErrAuth = true;
      }
    });
  }

  isVerifyForm(): boolean {
    if (this.adminForm.get('loginInput').value === 'admin' &&
      this.adminForm.get('passwordInput').value === 'omerta') return true;
    else return false;
  }

  logout() {
    
  }

}