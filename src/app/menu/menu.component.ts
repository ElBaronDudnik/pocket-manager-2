import { Component, NgZone, OnInit } from '@angular/core';
import { ChannelsService } from '../shared/channels.service';
import { LoaderService } from '../shared/loader.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public channels = [];
  constructor(private channelsService: ChannelsService,
              private ngZone: NgZone,
              public loader: LoaderService
              ) { }

  ngOnInit() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const token = localStorage.getItem('UserToken');
    this.channelsService.getUserInfo(token);
    this.channelsService.channelsData.subscribe((result: object) => {
      this.ngZone.run(() => this.channels.push(result));
    });

  }
}
