import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {ChannelsService} from '../shared/channels.service';

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
  public errors;
  constructor(private auth: AuthService,
              private channelsService: ChannelsService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
    if (this.form.valid) {
      this.auth.authorization(this.form.value.login, this.form.value.password).then(uid => {
        console.log(uid);
        this.router.navigate(['menu']);

        if (uid === 'error') {
          this.errors = true;
        }
      });
    }
  }

}
