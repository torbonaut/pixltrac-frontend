import {ICategory, IColorPalette, TLanguage} from '../models/settings.model';

export interface ISettingsStateModel {
  colorPalettesLoading: boolean;
  categoriesLoading: boolean;
  colorPalettes: IColorPalette[];
  activeColorPalette: IColorPalette;
  categories: ICategory[];
  lastCategoryId: number;
  language: TLanguage;
}

export const defaultSettingsState: ISettingsStateModel = {
  colorPalettesLoading: false,
  categoriesLoading: false,
  colorPalettes: [],
  activeColorPalette: null,
  categories: [],
  lastCategoryId: null,
  language: 'en'
};
