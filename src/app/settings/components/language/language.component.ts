import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SettingsState} from '../../state/settings.state';
import {Observable} from 'rxjs';
import {TLanguage} from '../../models/settings.model';
import {ActionSettingsSetLanguage} from '../../state/settings.actions';

@Component({
  selector: 'pt-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageComponent implements OnInit {

  @Select(SettingsState.language) language$: Observable<TLanguage>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  selectLanguage(language: TLanguage) {
    this.store.dispatch(new ActionSettingsSetLanguage(language));
  }

}
