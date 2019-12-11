import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pixtrac-frontend';

  constructor(
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');
    translateService.use('de');

  }
}
