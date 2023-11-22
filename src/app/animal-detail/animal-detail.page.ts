import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.page.html',
  styleUrls: ['./animal-detail.page.scss'],
})
export class AnimalDetailPage implements OnInit {

  data: any;
  image: any;
  lat: any;
  lng: any;

  constructor(private route: ActivatedRoute, private router: Router, public photoService: PhotoService) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation() != null) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        //Info general
        //console.log(this.data.event.url_image);
        this.lat= this.data.lat;
        this.lng = this.data.lng;

        //console.log(this.lat);
        //console.log(this.lng);
        this.image= `url(${this.data.event.url_image})`;
        //console.log(this.image);
        //this.data.background = { backgroundImage: `url(${this.data.event.images})`}
        this.data.background = { backgroundImage: `url(${this.data.event.url_image})`}
      }
    });

  }

  ngOnInit() {
  }

  map(location:any){
    let navigationExtras: NavigationExtras = {
      state: {
        event: location,
        lat: this.lat,
        lng: this.lng
      },
    };
    this.router.navigate(['map'], navigationExtras);
    localStorage.setItem('lat', this.lat);
    localStorage.setItem('lng', this.lng);

  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
