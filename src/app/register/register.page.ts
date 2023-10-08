import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  background = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
  };

  loading: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: [null, [Validators.required]],
    });
  }

  signUp() {
    if (this.registerForm.valid) {
      this.presentLoading();
      setTimeout(() => {
        this.loading.dismiss();
        this.router.navigate(['tabs/explore']);
      }, 2000);
    } else {
      console.log('invalid');
    }
  }

  goBack() {
    this.router.navigate(['/welcome']);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message:
        '<span class="loader"><span class="loader-inner"></span></span> <p>Loading</p>',
      duration: 2000,
      spinner: null,
    });
    await this.loading.present();
  }
}
