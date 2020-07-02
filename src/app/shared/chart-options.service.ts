import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartOptionsService {
  currentTimeStamp;
  currentPointsNumber;

  constructor() {
    this.currentTimeStamp = localStorage.getItem('timeStamp') || 20;
    this.currentPointsNumber = localStorage.getItem('pointsNumber') || 20;
  }

  getTimeStamp() {
    return (this.currentTimeStamp / 60) < 1 ? `${this.currentTimeStamp}ч` : this.currentTimeStamp / 60;
  }

  getChartTimeStamp() {
    return this.currentTimeStamp;
  }

  getPointsNumber() {
    return this.currentPointsNumber;
  }

  setTimeStamp(value) {
    this.currentTimeStamp = value.includes('ч') ? parseInt(value, 10) : parseInt(value, 10) * 60;
    localStorage.setItem('timeStamp', this.currentTimeStamp);
  }

  setPointsNumber(value) {
    this.currentPointsNumber = value;
    localStorage.setItem('pointsNumber', this.currentPointsNumber);
  }
}
