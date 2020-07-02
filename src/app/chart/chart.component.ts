import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChartOptionsService } from '../shared/chart-options.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  url;
  width;
  public propertyName;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private chartOptionsService: ChartOptionsService) {}

  ngOnInit() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.width = window.innerWidth;
    const points = this.chartOptionsService.getPointsNumber();
    const timeStamp = this.chartOptionsService.getChartTimeStamp();
    this.route.queryParams.subscribe(value => {
      const chartWidth = this.width - 20;
      this.propertyName = value.propertyName;
      const chartHeight = window.innerHeight - 100;
      this.url =
        `https://api.thingspeak.com/channels/${value.channel}/charts/${+value.property + 1}?results=${points * timeStamp}&width=${chartWidth}&height=${chartHeight}`;
    });
  }

  goBack() {
    this.location.back();
  }
}
