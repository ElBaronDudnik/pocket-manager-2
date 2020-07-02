import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

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
              private dataService: DataService,
              private location: Location) { }

  ngOnInit() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.route.queryParams
      .subscribe((res: Params) => {
        if (res.channel) {
          this.channelNumber = res.channel;
          this.channelInfo = this.dataService.getInfo(res.channel);
        }
      });
  }

  public onPropertyClick(propertyIndex, property) {
    console.log(property, typeof property)
    this.router.navigate(['/chart'],
      {queryParams: {
        channel: this.channelNumber,
        property: propertyIndex,
        propertyName: property.name
      }}).then();
  }

  goBack() {
    this.location.back();
  }
}

