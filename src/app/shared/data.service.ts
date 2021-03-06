import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

class Fields {
    fieldNumber: string;
    name: string;
    value: string;
    values?: [];
    constructor(fieldNumber, name, value) {
        this.fieldNumber = fieldNumber;
        this.name = name;
        this.value = value || 0;
    }
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    channelInfo = [];
    result;
    constructor(private apiService: ApiService) {
    }

    rebuildInfo(obj) {
      const feeds = obj.feeds;
      const channel = obj.channel;
      this.result = {
        id: obj.channel.id,
        channelName: obj.channel.name,
        lastUpdate: feeds[0].created_at,
        values: []
      };
      console.log(obj);
      // tslint:disable-next-line:forin
      for (const propFeeds in feeds[0]) {
        for (const propChannel in channel) {
          if (propFeeds === propChannel && propChannel !== 'created_at') {
            const propName = channel[propChannel];
            const propValue = feeds[0][propFeeds];
            this.result.values.push(new Fields(propChannel, propName, propValue));
          }
        }
      }
      console.log(this.result);
      return this.result;
    }

    // rebuildAdmin(obj) {
    //   const feeds = obj.feeds;
    //   const channel = obj.channel;
    //   this.result = [];
    //   // tslint:disable-next-line:forin
    //   for (const propChannel in channel) {
    //     const propValues = [];
    //     for (const propFeeds in feeds[0]) {
    //       if (propFeeds === propChannel && propChannel !== 'created_at') {
    //         const propName = channel[propChannel];
    //         feeds.forEach(feed => {
    //           propValues.push(feed[propFeeds]);
    //         })
    //         this.result.push(new Fields(propChannel, propName, 0, propValues));
    //       }
    //     }
    //   }
    //   console.log(this.result);
    //   return this.result;
    // }

    getInfo(channelNumber) {
        return this.apiService.getInfo(channelNumber)
            .pipe(
                tap(obj => {
                  this.channelInfo = this.rebuildInfo(obj);
                }),
                switchMap(obj => of(this.channelInfo))
            );
    }
    // getManaging() {
    //   return this.apiService.getManaging()
    //     .pipe(
    //       tap(obj => {
    //         this.managingInfo = this.rebuildInfo(obj);
    //       }),
    //       switchMap(obj => of(this.managingInfo))
    //     );
    // }
    // getSensors() {
    //   return this.apiService.getSensors()
    //     .pipe(
    //       tap(obj => {
    //         this.sensorsInfo = this.rebuildInfo(obj);
    //       }),
    //       switchMap(obj => of(this.sensorsInfo))
    //     );
    // }
    // getAdmin(results) {
    //   return this.apiService.readFromAdmin(results)
    //     .pipe(
    //       tap(obj => {
    //         this.adminInfo = this.rebuildAdmin(obj);
    //       }),
    //       switchMap(obj => of(this.adminInfo))
    //     );
    // }
    // getTables(results) {
    //   return this.apiService.readModeTables(results)
    //     .pipe(
    //       tap(obj => {
    //         this.adminInfo = this.rebuildAdmin(obj);
    //       }),
    //       switchMap(obj => of(this.adminInfo))
    //     );
    // }

}
