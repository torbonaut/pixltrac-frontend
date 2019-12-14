import {Action, Actions, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {entriesDefaultState, IEntriesStateModel} from './entries.state-model';
import {ActionEntriesLoad} from './entries.actions';
import {EntriesService} from '../services/entries.service';
import {tap} from 'rxjs/operators';
import {IEntry} from '../models/entries.model';

@State({
    name: 'Entries',
    defaults: entriesDefaultState
  })
export class EntriesState implements NgxsOnInit {

  constructor(
    private entriesService: EntriesService,
    private store: Store
  ) {

  }

  ngxsOnInit(ctx?: StateContext<any>): void | any {
    this.store.dispatch(new ActionEntriesLoad());
  }

  @Selector()
  static allEntries(state: IEntriesStateModel) {
    return state.entries;
  }

  @Action(ActionEntriesLoad)
  load(ctx: StateContext<IEntriesStateModel>, action: ActionEntriesLoad) {
    return this.entriesService.loadEntries().pipe(
      tap( (entries: IEntry[]) => {
        ctx.patchState({ entries });
      })
    );
  }
}
