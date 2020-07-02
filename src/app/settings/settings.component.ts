import {Component, OnInit} from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormControl } from '@angular/forms';
import { DatabaseService } from '../shared/database.service';
import { Location } from '@angular/common';
import { ChartOptionsService } from '../shared/chart-options.service';
import { debounceTime, distinct } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  popupOpen = false;
  public changePH: FormControl;
  public changeRx: FormControl;
  public changeTemp: FormControl;
  public pointsValue;
  public timestampValue;
  public points;
  public hours = ['6ч', '12ч', '1', '2', '5', '10'];
  constructor(private authService: AuthService,
              private databaseService: DatabaseService,
              private location: Location,
              private chartOptions: ChartOptionsService) { }

  public logOut() {
    this.authService.logOut();
  }

  ngOnInit() {
    this.changePH = new FormControl();
    this.changeRx = new FormControl();
    this.changeTemp = new FormControl();
    this.points = new FormControl();
    this.pointsValue = this.chartOptions.getPointsNumber();
    this.timestampValue = this.chartOptions.getTimeStamp();
    console.log(this.timestampValue);
    this.points.valueChanges.pipe(debounceTime(700), distinct()).subscribe(point => {
      this.chartOptions.setPointsNumber(point);
      this.pointsValue = point;
    });
  }

  public changePHSetting(value) {
    const phObj = {
      arg1_in: 50,
      arg2_in: value * 100,
      cmd_in: 43,
      pass_in: 77
    };
    this.databaseService.setPH(phObj).subscribe();
  }

  changeRxSetting(value) {
    console.log(value);
  }

  changeTempSetting(value) {
    console.log(value);
  }

  change(e) {
    const target = e.target.value;
    this.timestampValue = target;
    this.chartOptions.setTimeStamp(target);
    setTimeout(() => {
      this.popupOpen = false;
    }, 500);
  }

  goBack() {
    this.location.back();
  }
}
