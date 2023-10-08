import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import Map from 'mapbox-gl';

@Component({
  selector: 'app-story-viewer',
  templateUrl: './story-viewer.page.html',
  styleUrls: ['./story-viewer.page.scss'],
})
export class StoryViewerPage implements AfterViewInit {

  slideOpts: any;

  constructor(
  ) { }


  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3ZpZGVhIiwiYSI6ImNsbmh5dnBiaTE1bHgybnBlemE0cWpkYnMifQ.-wQTKAiiXOXJf3vZL8qI3g';
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 14
    })
  }

}
