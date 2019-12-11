import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenDashboardComponent } from './screens/screen-dashboard/screen-dashboard.component';
import {MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [ScreenDashboardComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
