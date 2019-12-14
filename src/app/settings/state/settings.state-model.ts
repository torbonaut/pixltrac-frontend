import {ICategory, IColorPalette} from '../models/settings.model';

export interface ISettingsStateModel {
  colorPalettesLoading: boolean;
  categoriesLoading: boolean;
  colorPalettes: IColorPalette[];
  activeColorPalette: IColorPalette;
  categories: ICategory[];
  lastCategoryId: number;
}

export const defaultSettingsState: ISettingsStateModel = {
  colorPalettesLoading: false,
  categoriesLoading: false,
  colorPalettes: [],
  activeColorPalette: null,
  categories: [],
  lastCategoryId: null
};
