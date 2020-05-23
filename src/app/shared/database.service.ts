import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DatabaseService {
  static url = environment.firebase.databaseURL;
  url_buryak = `https://descon-mer-burjak-swim.firebaseio.com`;

  constructor(private http: HttpClient,
              public db: AngularFireDatabase) {}

  getUserById(id) {
    return this.http.get(`${DatabaseService.url}/users/${id}.json`);
  }

  setPH(value) {
    console.log(value);
    return this.http.post(`${this.url_buryak}/Ctrl.json`, value);
  }

  getChannels() {
    return this.db.database.ref('/channels');
  }
}
