import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select} from '@ngxs/store';
import {SettingsState} from '../../state/settings.state';
import {Observable} from 'rxjs';
import {ICategory} from '../../models/settings.model';

@Component({
  selector: 'pt-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {

  @Select(SettingsState.categories) categories$: Observable<ICategory[]>;

  constructor() { }

  ngOnInit() {
  }

}
