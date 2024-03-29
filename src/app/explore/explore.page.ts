import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  articles: any;
  users: any;
  feeds: any;
  stories: any;
  follow: any;
  ads: any;
  news: any;
  events: any;
  animal:any;
  id:any;

  storiesConfig = {
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 2.8,
  };

  usersConfig = {
    initialSlide: 0,
    spaceBetween: 2,
    slidesPerView: 5,
  };

  followConfig = {
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 2.6,
  };

  constructor(private router: Router, private dataService: DataService, private apiService: ApiService) {}

  ngOnInit() {
    this.articles = this.dataService.getArticles();
    this.users = this.dataService.getSeenFirtsHistories();
    this.feeds = this.dataService.getFeed();
    this.follow = this.dataService.getFollow();
    this.ads = this.dataService.getAds();
    this.events = this.dataService.getEvents();
    this.stories = this.dataService.getStories();

    this.apiService.getAllNews().subscribe((response) => {
      this.news=response;
      console.log("Estoy en la pagina del inicio");
    });
    this.id='0';
  }

  eventDetail(item:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        event: item
      }
    };
    this.router.navigate(['event-detail'], navigationExtras);
  }

  viewStory(index:any) {
    this.router.navigate(['story', index]);
  }

  navigateToDetail() {
    this.router.navigate(['post-detail']);
  }

  goToLogin() {
    this.router.navigate(['welcome']);
  }

  category(category:string){
    if(category=='1'){
      this.id='1';
    }else if(category=='2'){
      this.id='2';
    }else if(category=='3'){
      this.id='3';
    }else if(category=='4'){
      this.id='4';
    }else if(category=='5'){
      this.id='5';
    }


    this.router.navigate(['/animals', this.id]);
  }


}
