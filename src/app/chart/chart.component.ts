import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  url;
  width;
  public propertyName;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.width = window.innerWidth;
    this.route.queryParams.subscribe(value => {
      const chartWidth = this.width - 80;
      this.propertyName = value.propertyName;
      console.log(value.name);
      const chartHeight = (document.getElementsByTagName('iframe')[0] as HTMLElement).getBoundingClientRect().height - 140;
      this.url =
        `https://api.thingspeak.com/channels/${value.channel}/charts/${+value.property + 1}?width=${chartWidth}&height=${chartHeight}`;
    });
  }
}
