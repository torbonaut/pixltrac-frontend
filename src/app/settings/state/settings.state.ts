import {Action, createSelector, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {defaultSettingsState, ISettingsStateModel} from './settings.state-model';
import {
  ActionSettingsLoadCategories,
  ActionSettingsLoadColorPalettes,
  ActionSettingsNewCategory,
  ActionSettingsSetActiveColorPalette, ActionSettingsSetLanguage, ActionSettingsUpdateCategory
} from './settings.actions';
import {ColorPalettesService} from '../services/color-palettes.service';
import {catchError, tap} from 'rxjs/operators';
import {ICategory, IColorPalette} from '../models/settings.model';
import {CategoriesService} from '../services/categories.service';

@State<ISettingsStateModel>({
  name: 'Settings',
  defaults: defaultSettingsState
})
export class SettingsState implements NgxsOnInit {

  static categoryById(id: number) {
    return createSelector([SettingsState], (state: ISettingsStateModel) => {
      return state.categories.find( (category: ICategory) => category.id === id);
    });
  }

  @Selector()
  static colorPalettes(state: ISettingsStateModel) {
    return state.colorPalettes;
  }

  @Selector()
  static activeColorPalette(state: ISettingsStateModel) {
    return state.activeColorPalette;
  }

  @Selector()
  static colorPalettesLoading(state: ISettingsStateModel) {
    return state.colorPalettesLoading;
  }

  @Selector()
  static categoriesLoading(state: ISettingsStateModel) {
    return state.categoriesLoading;
  }

  @Selector()
  static categories(state: ISettingsStateModel) {
    return state.categories;
  }

  @Selector()
  static lastCategoryId(state: ISettingsStateModel) {
    return state.lastCategoryId;
  }

  @Selector()
  static language(state: ISettingsStateModel) {
    return state.language;
  }

  sortFunction = (a: ICategory, b: ICategory) => a.title.localeCompare(b.title);

  constructor(
    private store: Store,
    private colorPalettesService: ColorPalettesService,
    private categoriesService: CategoriesService
  ) {}

  ngxsOnInit(ctx?: StateContext<ISettingsStateModel>): void {
    this.store.dispatch(ActionSettingsLoadColorPalettes);
    // this.store.dispatch(ActionSettingsLoadCategories);
  }

  @Action(ActionSettingsLoadColorPalettes)
  loadColorPalettes(ctx: StateContext<ISettingsStateModel>, action: ActionSettingsLoadColorPalettes) {
    ctx.patchState({ colorPalettesLoading: true });

    return this.colorPalettesService.getAllColorPalettes().pipe(
      tap( (palettes: IColorPalette[]) => {
        if (palettes && palettes.length) {
          const colorPalettes = [...palettes];
          ctx.patchState( { colorPalettes });
        }
        ctx.patchState({ colorPalettesLoading: false});
      }),
      catchError( error => {
        ctx.patchState({ colorPalettesLoading: false});
        return error;
      })
    );
  }

  @Action(ActionSettingsSetActiveColorPalette)
  setActiveColorPalette(ctx: StateContext<ISettingsStateModel>, action: ActionSettingsSetActiveColorPalette) {
    const activeColorPalette = { ...action.activeColorPalette };
    ctx.patchState( { activeColorPalette });
  }

  @Action(ActionSettingsLoadCategories)
  loadCategories(ctx: StateContext<ISettingsStateModel>, action: ActionSettingsLoadCategories) {
    ctx.patchState({ categoriesLoading: true });

    return this.categoriesService.getAllCategories().pipe(
      tap( (categories: ICategory[]) => {
        if (categories && categories.length) {
          categories.sort( this.sortFunction);
          ctx.patchState({ categories});
        }
        ctx.patchState({ categoriesLoading: false});
      }),
      catchError( error => {
        ctx.patchState({ categoriesLoading: false});
        return error;
      })
    );
  }

  @Action(ActionSettingsNewCategory)
  newCategory(ctx: StateContext<ISettingsStateModel>, action: ActionSettingsNewCategory) {
    const state = ctx.getState();

    const highestNumberReducer = (previousValue: number, currentValue: number) =>
      previousValue > currentValue ? previousValue : currentValue;

    const latestId = state.categories
      .map( (item: ICategory) => item.id)
      .reduce( highestNumberReducer, 0);

    const lastCategoryId = latestId + 1;

    const category: ICategory = {
      id: lastCategoryId,
      title: 'neue Kategorie',
      description: '...',
      created: new Date(),
      activated: false
    };

    const categories = [...state.categories, category].sort(this.sortFunction);

    ctx.patchState({ categories, lastCategoryId});
  }

  @Action(ActionSettingsUpdateCategory)
  updateCategory(ctx: StateContext<ISettingsStateModel>, action: ActionSettingsUpdateCategory) {
    const state = ctx.getState();

    const categoriesTmp = state.categories.filter( (item: ICategory) => item.id !== action.updatedCategory.id);

    const categories = [...categoriesTmp, action.updatedCategory]
      .sort(this.sortFunction);

    ctx.patchState({ categories });
  }

  @Action(ActionSettingsSetLanguage)
  setLanguage(ctx: StateContext<ISettingsStateModel>, action: ActionSettingsSetLanguage) {
    ctx.patchState( { language: action.language });
  }
}
