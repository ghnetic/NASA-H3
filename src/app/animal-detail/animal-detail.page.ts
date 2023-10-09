import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.page.html',
  styleUrls: ['./animal-detail.page.scss'],
})
export class AnimalDetailPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router, public photoService: PhotoService) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation() != null) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        //Info general
        console.log(this.data.event);
        this.data.event.url_image = { url_image: `url(${this.data.event.url_image})`}
      }
    });

  }

  ngOnInit() {
  }

  map(lat:any, lon:any){
    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude', lon);
    this.router.navigate(['map']);
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
