import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  data: any;
  id: any;
  user: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation() != null) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        this.id= this.data.id;
        //console.log(this.data.event);
        //console.log(this.id)
        this.data.background = { backgroundImage: `url(${this.data.event.images})`}
      }
    });

  }

  ngOnInit() {
    this.user = localStorage.getItem('userId')
  }



  attendEvent(){
    if(this.user!=null){
      Swal.fire({
        title: "¡Bien!",
        text: "Ya te registraste al evento",
        icon: "success"
      });

    }else{
      Swal.fire({
        title: "Ups!",
        text: "Necesitas iniciar sesion para registrarte al evento",
        icon: "warning"
      });

    }
  }

}
