import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'node_modules/ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router, private cookieService: CookieService ){}

  ngOnInit() {
    if (this.checkEnableDasboard()) this.authService.isLoggedIn = true;
    else this.authService.isLoggedIn = false;
  }

  logout() {
    this.authService.logout();
    this.cookieService.set("enableDashboard", "false");
    if (this.router.url === "/dashboard") this.router.navigate(['/login']);
  }

  checkEnableDasboard(): boolean {
    if (this.cookieService.check("enableDashboard")) {
      if (this.cookieService.get("enableDashboard") === "true") return true;
    } else return false;
  }
}
