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
  lat: any;
  lon: any;

  ngOnInit() {
  this.getWeather();
  }

  goToHome() {
    this.router.navigate(['explore']);
  }

  constructor(private router: Router){

  }

  getWeather(){
    //Aqui obtenemos el ip
          fetch('https://api.my-ip.io/ip.json')
          .then(response=> response.json())
          .then(async data => {
            this.ip=data.ip.toString();
            //console.log(this.ip);

            this.url='https://weatherapi-com.p.rapidapi.com/ip.json?q='+this.ip;
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '3b54501c1cmsh9bf1440086b89cfp1fc3f9jsn1d3de34c91a2',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
              }
            };
            try {
              const response = await fetch(this.url, options);
              const result = await response.text();

              this.lat= JSON.stringify(result);
              console.log(this.lat);

              //console.log('hola');
            } catch (error) {
              console.log('adios');
              console.error(error);
            }
        });


    }

}
