import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'chart', component: ChartComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
