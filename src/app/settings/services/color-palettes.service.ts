import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IColorPalette} from '../models/settings.model';

@Injectable()
export class ColorPalettesService {

  getAllColorPalettes(): Observable<IColorPalette[]> {
    const palettes: IColorPalette[] = [
      {
        id: 2,
        title: 'Neon',
        colors: ['#76ff03', '#18ffff', '#f50057']
      },
      {
        id: 3,
        title: 'Grauwolf',
        colors: ['#bdbdbd', '#212121']
      },
      {
        id: 4,
        title: '3-Way',
        colors: ['#64dd17', '#FFA500', '#d50000']
      },
      {
        id: 5,
        title: '4-Way',
        colors: ['#64dd17', '#FFF200', '#FFA500', '#d50000']
      },
    ];

    return of(palettes);
  }
}
