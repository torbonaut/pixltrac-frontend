import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {routeAnimations} from './routes.animation';
import {Actions, ofActionSuccessful, Select, Store} from '@ngxs/store';
import {ActionSettingsSetLanguage} from './settings/state/settings.actions';
import {SettingsState} from './settings/state/settings.state';
import {Observable, Subscription} from 'rxjs';
import {TLanguage} from './settings/models/settings.model';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pixltrac-frontend';
  subscriptions: Subscription = new Subscription();
  @Select(SettingsState.language) language$: Observable<TLanguage>;

  constructor(
    private translateService: TranslateService,
    private actions: Actions,
    private store: Store
  ) {
    translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.language$.subscribe( (language: TLanguage) => {
        this.translateService.use(language);
      })
    );

    this.subscriptions.add(
      this.actions.pipe(
        ofActionSuccessful(ActionSettingsSetLanguage)
      ).subscribe( () => {
        const language = this.store.selectSnapshot(SettingsState.language);
        this.translateService.use(language);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
