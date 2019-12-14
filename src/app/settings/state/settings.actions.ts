import {ICategory, IColorPalette, TLanguage} from '../models/settings.model';

export class ActionSettingsLoadColorPalettes {
  static readonly type = '[Settings] Load Color Palettes';
}

export class ActionSettingsSetActiveColorPalette {
  static readonly type = '[Settings] Set Active Color Palette';
  constructor(public activeColorPalette: IColorPalette) {}
}

export class ActionSettingsLoadCategories {
  static readonly type = '[Settings] Load Categories';
}

export class ActionSettingsUpdateCategory {
  static readonly type = '[Settings] Update Category';
  constructor(public updatedCategory: ICategory) {}
}

export class ActionSettingsNewCategory {
  static readonly type = '[Settings] New Category';
}

export class ActionSettingsDeleteCategory {
  static readonly type = '[Settings] Delete Category';
  constructor(public categoryId: number) {}
}

export class ActionSettingsSetLanguage {
  static readonly type = '[Settings] Set Language';
  constructor(public language: TLanguage) {}
}
