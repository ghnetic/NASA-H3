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
      image: 'assets/images/LOGOMOVE.gif',
      title: 'Honduras | H₂O | Heroes',
      description: 'What´s Up With This Water?'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/explore']);
  }

}
