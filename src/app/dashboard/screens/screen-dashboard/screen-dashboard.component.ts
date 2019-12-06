import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pt-screen-dashboard',
  templateUrl: './screen-dashboard.component.html',
  styleUrls: ['./screen-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
