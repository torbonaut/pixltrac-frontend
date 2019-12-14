import {NgModule} from '@angular/core';
import {EntriesService} from './services/entries.service';
import {NgxsModule} from '@ngxs/store';
import {EntriesState} from './state/settings.state';
import { EntryYearViewComponent } from './components/entry-year-view/entry-year-view.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    EntryYearViewComponent
  ],
  imports: [
    NgxsModule.forFeature([EntriesState]),
    CommonModule
  ],
  exports: [
    EntryYearViewComponent
  ],
  providers: [
    EntriesService
  ]
})
export class EntriesModule {
  constructor() {}
}
