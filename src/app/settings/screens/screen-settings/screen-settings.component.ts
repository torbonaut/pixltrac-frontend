import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pt-screen-settings',
  templateUrl: './screen-settings.component.html',
  styleUrls: ['./screen-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
