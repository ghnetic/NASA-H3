import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  data: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation() != null) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        this.id= this.data.id;
        console.log(this.data.event);
        console.log(this.id)
        this.data.background = { backgroundImage: `url(${this.data.event.images})`}
      }
    });

  }

  ngOnInit() {

  }

}
