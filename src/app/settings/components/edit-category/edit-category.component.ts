import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, of, Subscription} from 'rxjs';
import {debounce, debounceTime, map, switchMap, tap} from 'rxjs/operators';
import {ICategory} from '../../models/settings.model';
import {Store} from '@ngxs/store';
import {SettingsState} from '../../state/settings.state';
import {ActionSettingsUpdateCategory} from '../../state/settings.actions';

@Component({
  selector: 'pt-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  form: FormGroup;

  routeId$: Observable<string>;

  subscriptions: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl(null, []),
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
      activated: new FormControl(null, []),
      created: new FormControl(null, [])
    });

    this.routeId$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      tap((id: string) => {
        const loadedCategory: ICategory = this.store.selectSnapshot(SettingsState.categoryById(parseInt(id, 10)));
        this.form.setValue(loadedCategory);
      })
    );

    this.subscriptions.add(
      this.form.valueChanges
        .pipe(
          debounceTime(500)
        )
        .subscribe( (category: ICategory) =>
          this.store.dispatch(new ActionSettingsUpdateCategory(category)))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
