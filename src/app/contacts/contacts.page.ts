import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from '../services/api.service';
import axios from 'axios';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactPage implements OnInit {
  category: any;
  name: any;
  data:any;
  datosCat: any;
  categor: any;
  lat: any;
  lng: any;

  constructor(private apiService: ApiService,private route: ActivatedRoute,private router: Router, private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categor= this.route.snapshot.paramMap.get('id');
    //console.log(this.categor);

//this.categor= localStorage.getItem("category");

if(this.categor=='1'){
  this.apiService.getCategory1().subscribe(response=>{
    this.data=response;
    //console.log(this.data);
  });
}else if(this.categor=='2'){
  this.apiService.getCategory2().subscribe(response=>{
    this.data=response;
  });
}else if(this.categor=='3'){
  this.apiService.getCategory3().subscribe(response=>{
    this.data=response;
  });
}else if(this.categor=='4'){
  this.apiService.getCategory4().subscribe(response=>{
    this.data=response;
  });
}else if(this.categor=='5'){
  this.apiService.getCategory5().subscribe(response=>{
    this.data=response;
  });
}

async function getCountryAndCity(apiKey: string, ipAddress?: string): Promise<{ country: string; city: string, lat: string, lng:string }> {
  const baseUrl = 'https://geo.ipify.org/api/v2';
  const endpoint = '/country,city';
  const queryParams = `?apiKey=${apiKey}${ipAddress ? `&ipAddress=${ipAddress}` : ''}`;
  const apiUrl = `${baseUrl}${endpoint}${queryParams}`;

  try {
    const response = await axios.get(apiUrl);
    const { country, city, lat, lng } = response.data.location;
    return { country, city, lat, lng };
  } catch (error:any) {
    // Handle error here, e.g., log the error or throw an exception.
    throw new Error(`Error fetching data from Geo.IPify: ${error.message}`);
  }
}

const apiKeyPlace = 'at_C0Jf6u7lJCuOUpjityb7ZcnQd4l8R';
getCountryAndCity(apiKeyPlace)
.then(({ country, city, lat, lng }) => {
  this.lat= lat;
  this.lng= lng;
  //console.log(`Country: ${country}`);
  //console.log(`City: ${city}`);
})
.catch((error) => {
  console.error(error);
});



  }

  animalDetail(item: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        event: item,
        lat: this.lat,
        lng: this.lng
      },
    };
    this.router.navigate(['animal-detail'], navigationExtras);
  }



}
