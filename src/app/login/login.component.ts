import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

export interface User {
  name: string;
  role: 'admin' | 'user';
  channels?: number[];
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public errors = {
    isError: false,
    errorMes: ''
  };
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  public login() {
    if (this.form.valid) {
      this.auth.authorization(this.form.value.login, this.form.value.password).then(uid => {
        console.log(uid);
        if (uid.toLowerCase().includes('error')) {
          this.errors = {
            isError: true,
            errorMes: 'Введенный пароль не соответсвует email. Обратитесь к вашему администратору!'
          };
        } else {
          this.router.navigate(['menu']);
        }
      });
    } else {
      this.errors = {
        isError: true,
        errorMes: 'Заполните пожалуйста все поля!'
      };
    }
  }

}
