import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenDashboardComponent} from './dashboard/screens/screen-dashboard/screen-dashboard.component';
import {ScreenSettingsComponent} from './settings/screens/screen-settings/screen-settings.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: ScreenDashboardComponent
  },
  {
    path: 'settings',
    component: ScreenSettingsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
