import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DatabaseService {
  static url = environment.firebase.databaseURL;

  constructor(private http: HttpClient,
              public db: AngularFireDatabase) {}

  getUserById(id) {
    return this.http.get(`${DatabaseService.url}/users/${id}.json`);
  }

  getChannels() {
    return this.db.database.ref('/channels');
  }
}
