import {Component, NgZone, OnInit} from '@angular/core';
import {ChannelsService} from '../shared/channels.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public channels = [];
  constructor(private channelsService: ChannelsService,
              private ngZone: NgZone
              ) { }

  ngOnInit() {
    const token = localStorage.getItem('UserToken');
    this.channelsService.getUserInfo(token);
    this.channelsService.channelsData.subscribe((result: object) => {
      this.ngZone.run(() => this.channels.push(result));
    });

  }
}
