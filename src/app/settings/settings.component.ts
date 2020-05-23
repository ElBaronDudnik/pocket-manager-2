import { Component } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import { FormControl } from '@angular/forms';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  popupOpen = false;
  public changePH: FormControl;
  public changeRx: FormControl;
  public changeTemp: FormControl;
  constructor(private authService: AuthService, private databaseService: DatabaseService) { }

  public logOut() {
    this.authService.logOut();
  }

  ngOnInit() {
    this.changePH = new FormControl();
    this.changeRx = new FormControl();
    this.changeTemp = new FormControl();
  }

  public changePHSetting(value) {
    const phObj = {
      arg1_in: 50,
      arg2_in: value*100,
      cmd_in: 43,
      pass_in: 77
    }
    this.databaseService.setPH(phObj).subscribe()
  }

  changeRxSetting(value) {
    console.log(value);
  }

  changeTempSetting(value) {
    console.log(value);
  }

  change(e) {
    console.log(e.target.dataset.mode);
    setTimeout(() => {
      this.popupOpen = false;
    }, 500);
  }
}
