import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {


  events: any;

  constructor(private router: Router, private dataService: DataService, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllNews().subscribe((response) => {
      this.events=response;
    });
  }



  eventDetail(item:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        event: item
      }
    };
    this.router.navigate(['event-detail'], navigationExtras);
  }
}
