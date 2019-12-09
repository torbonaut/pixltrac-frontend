// @ts-ignore
import * as interpolate from 'color-interpolate';
import {environment} from '../../../environments/environment';

export class ColorPalettesUtility {
  static getColors(colors: string[]): string[] {

    if (colors.length === environment.grades) {
      return colors;
    }

    const palette = interpolate(colors);

    const result: string[] = [];

    for (let i = 0; i < environment.grades; i++) {
      result.push(palette(1 / environment.grades * i));
    }

    return result;
  }
}
