import { Injectable } from '@angular/core';
import {DatabaseService} from './database.service';
import {UserInfo} from './auth.service';
import {DataService} from './data.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  private channelsDataArr = new Subject<object>();

  constructor(private databaseService: DatabaseService,
              private dataService: DataService
              ) {}

  public getChannelsData(userInfo) {
    console.log(userInfo);
    // const userInfo = await JSON.parse(localStorage.getItem('user'));
    if (userInfo && userInfo.role === 'admin') {
      this.databaseService.getChannels().on('value', snapshot => {
        snapshot.val().forEach(channel => this.channelInfo(channel));
      });
    } else if (Array.isArray(userInfo.channels)) {
        userInfo.channels.forEach(channel => this.channelInfo(channel));
    } else {
      this.channelInfo(userInfo.channels);
      // this.router.navigate(['/home'], {queryParams: {channel: userInfo.channels}});
    }
  }

  public getUserInfo(uid) {
    this.databaseService.getUserById(uid).subscribe((result: UserInfo) => {
      const userInfo = {
        username: result.name,
        token: uid,
        channels: result.channels,
        role: result.role,
      };
      // localStorage.setItem('user', JSON.stringify(userInfo));
      this.getChannelsData(result);
    });
  }

  public channelInfo(channelNum) {
    this.dataService.getInfo(channelNum).subscribe((result: object) =>
      this.channelsDataArr.next(result));
  }

  get channelsData() {
    return this.channelsDataArr.asObservable();
  }
}
