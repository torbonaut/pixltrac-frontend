import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pt-entry-year-view',
  templateUrl: './entry-year-view.component.html',
  styleUrls: ['./entry-year-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryYearViewComponent implements OnInit {

  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor() { }

  ngOnInit() {
  }

}
