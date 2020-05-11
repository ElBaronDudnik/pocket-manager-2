import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

export interface UserInfo {
  name: string;
  email: string;
  token: string;
  channels: number[];
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  async authorization(emailAddress: string, password: string) {
    try {
      const res = await  firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      const { uid } = res.user;
      localStorage.setItem('UserToken', uid);
      return uid ;
    } catch (e) {
      return `Authentication Error: ${e}`;
    }
  }

  public logOut() {
    localStorage.removeItem('UserToken');
    this.router.navigate(['/auth']);
  }
}
