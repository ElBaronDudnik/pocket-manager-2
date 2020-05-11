import { Component } from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  popupOpen = true;
  constructor(private authService: AuthService) { }

  public logOut() {
    this.authService.logOut();
  }
}
