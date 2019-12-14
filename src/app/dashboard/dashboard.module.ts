import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenDashboardComponent } from './screens/screen-dashboard/screen-dashboard.component';
import {MatToolbarModule} from '@angular/material';
import {EntriesModule} from '../entries/entries.module';



@NgModule({
  declarations: [ScreenDashboardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    EntriesModule
  ]
})
export class DashboardModule { }
