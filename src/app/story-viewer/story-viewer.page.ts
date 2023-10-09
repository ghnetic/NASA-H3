import {
  Component,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-viewer',
  templateUrl: './story-viewer.page.html',
  styleUrls: ['./story-viewer.page.scss'],
})
export class StoryViewerPage implements OnInit {

  slideOpts: any;

  ip: string ='';
  url: string='';
  lat= localStorage.getItem('latitude');
  lon= localStorage.getItem('longitude');

  ngOnInit() {

  }

  goToHome() {
    this.router.navigate(['explore']);
  }

  constructor(private router: Router){

  }


}
