import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Map, MapStyle, Marker, Popup,config } from '@maptiler/sdk';


@Component({
  selector: 'app-story-viewer',
  templateUrl: './story-viewer.page.html',
  styleUrls: ['./story-viewer.page.scss'],
})
export class StoryViewerPage implements OnInit, AfterViewInit, OnDestroy{

  slideOpts: any;
  token ='at_C0Jf6u7lJCuOUpjityb7ZcnQd4l8R';
  ip: string ='';
  url: string='';
  lat: any;
  lng: any;
  data: any;
  image: any;
  animalLocation: any;
  animalJson: any;

  map: Map | undefined;
  @ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {

    config.apiKey = 'vbqZjmUSK8ISkQf88jrO';
    this.lat=localStorage.getItem('lat');
    this.lng=localStorage.getItem('lng');
  }



  ngAfterViewInit() {
    const initialState = { lng: this.lng, lat: this.lat, zoom: 6 };
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      fullscreenControl: "bottom-right",

    });

    var popup = new Popup({ offset: 25 })
    .setHTML("<h6 style='color: black;'>"+this.data.event.common_name+" ubication</h6>")

    var ubicationPopup = new Popup({ offset: 25 })
    .setHTML("<h6 style='color: black;'>Your actual ubication</h6>")

    new Marker({color: "#FF0000"})
      .setLngLat([this.lng,this.lat])
      .setPopup(ubicationPopup)
      .addTo(this.map);

    new Marker({color: "#17ca50"})
      .setLngLat([this.animalJson['lng'],this.animalJson['lat']])
      .setPopup(popup)
      .addTo(this.map);

      /* Para acercar el mapa
      await this.map.onLoadWithTerrainAsync();

    this.map.flyTo({
        center: [this.animalJson['lng'],this.animalJson['lat']], // Animal ubication
        zoom: 12.5,
      })
      */
  }

  ngOnDestroy() {
    this.map?.remove();
  }


  goBack() {
    this.router.navigate(['/explore']);
  }

  constructor(private route: ActivatedRoute, private router: Router,){
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation() != null) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        //Info general
        this.lat= this.data.lat;
        this.lng = this.data.lng;
        this.animalLocation = this.data.event.location;
        const splittedArray = this.animalLocation.split(",")
        //console.log(this.animalLocation);
        this.animalJson = {
          "lat": splittedArray[0],
          "lng": splittedArray[1]
        }
        this.data.background = { backgroundImage: `url(${this.data.event.url_image})`}
      }
    });

  }


}
