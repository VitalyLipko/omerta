import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'node_modules/ngx-cookie-service';
import { fadeInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {
  isEnableScrollBtn: boolean = false;
  constructor(public authService: AuthService, public router: Router, private cookieService: CookieService) { }

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

  getAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
