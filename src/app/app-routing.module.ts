import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenDashboardComponent} from './dashboard/screens/screen-dashboard/screen-dashboard.component';
import {ScreenSettingsComponent} from './settings/screens/screen-settings/screen-settings.component';
import {ScreenEditCategoryComponent} from './settings/screens/screen-edit-category/screen-edit-category.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ScreenDashboardComponent,
    data: {
      backLinkOrSettings: false,
      title: 'ROUTES.DASHBOARD'
    }
  },
  {
    path: 'settings',
    component: ScreenSettingsComponent,
    data: {
      backLinkOrSettings: true,
      title: 'ROUTES.SETTINGS'
    }
  },
  {
    path: 'settings/screen-edit-category/:id',
    component: ScreenEditCategoryComponent,
    data: {
      backLinkOrSettings: true,
      title: 'ROUTES.EDIT_CATEGORY'
    }
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
