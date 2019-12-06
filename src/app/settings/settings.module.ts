import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenSettingsComponent } from './screens/screen-settings/screen-settings.component';



@NgModule({
  declarations: [ScreenSettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ScreenSettingsComponent
  ]
})
export class SettingsModule { }
