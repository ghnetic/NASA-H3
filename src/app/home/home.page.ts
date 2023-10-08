import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data = [
    {
      image: 'assets/images/LOGO.png',
      title: 'Honduras | H₂O | Heroes',
      description: 'What´s Up With These Water?'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/explore']);
  }

}
