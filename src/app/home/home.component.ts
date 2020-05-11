import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../shared/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public channelInfo: Observable<object>;
  public channelNumber: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((res: Params) => {
        console.log(res);
        if (res.channel) {
          this.channelNumber = res.channel;
          this.channelInfo = this.dataService.getInfo(res.channel);
        }
      });

    // this.channelsService.channelsData.subscribe((result: object) => {
    //   this.channels.push(result);
    //   console.log(this.channels);
    //   this.cdr.detectChanges();
    // });

  }

  public onPropertyClick(propertyIndex, property) {
    this.router.navigate(['/chart'],
      {queryParams: {
        channel: this.channelNumber,
        property: propertyIndex,
        propertyName: property.name
      }}).then();
  }
}

