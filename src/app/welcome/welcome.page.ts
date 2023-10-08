import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  background = {
    backgroundImage: 'url(assets/posters/oceanDays.png)'
  };

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['explore']);
  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
