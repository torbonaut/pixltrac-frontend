import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {routeAnimations} from './routes.animation';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'pixltrac-frontend';

  constructor(
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');
    translateService.use('de');

  }
}
