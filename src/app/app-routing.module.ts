import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {ChartComponent} from './chart/chart.component';
import {SettingsComponent} from './settings/settings.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
