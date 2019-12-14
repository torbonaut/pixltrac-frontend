import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Actions, ofActionSuccessful, Select, Store} from '@ngxs/store';
import {SettingsState} from '../../state/settings.state';
import {Observable, Subscription} from 'rxjs';
import {ICategory} from '../../models/settings.model';
import {ActionSettingsNewCategory} from '../../state/settings.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'pt-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit, OnDestroy {

  @Select(SettingsState.categories) categories$: Observable<ICategory[]>;

  subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store,
    private actions: Actions,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.actions.pipe(
        ofActionSuccessful(ActionSettingsNewCategory)
      ).subscribe( () => {
        const id = this.store.selectSnapshot(SettingsState.lastCategoryId);
        this.router.navigate(['/settings/edit-category/' + id]);
      })
    );
  }

  newCategory() {
    this.store.dispatch(new ActionSettingsNewCategory());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
