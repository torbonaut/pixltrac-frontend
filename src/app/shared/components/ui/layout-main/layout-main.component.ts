import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pt-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
