import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactPage implements OnInit {
  category: any;
  name: any;

  constructor(private router: Router, private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    if (this.name = "turtle") {
      console.log('tortugas');
      this.category = this.dataService.getTurtles();
    } else if (this.name = "dolphin") {
      console.log('delfines');
      this.category = this.dataService.getDolphins();
    } else {
      this.category = "No existe esta categoria."
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
