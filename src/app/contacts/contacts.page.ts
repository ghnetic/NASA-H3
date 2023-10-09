import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactPage implements OnInit {
  category: any;
  name: any;
  data:any;
  categor: any;

  constructor(private apiService: ApiService,private route: ActivatedRoute,private router: Router, private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
this.categor= localStorage.getItem("category");

if(this.categor=='1'){
  this.apiService.getCategory1().subscribe(response=>{
    this.data=response;
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
}

  }

  animalDetail(item: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        event: item,
      },
    };
    this.router.navigate(['animal-detail'], navigationExtras);
  }

  navigateToChat(item: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: item,
      },
    };
    this.router.navigate(['chat'], navigationExtras);
  }


}
