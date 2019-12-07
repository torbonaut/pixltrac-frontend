import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IColorPalette} from '../models/settings.model';

@Injectable()
export class ColorPalettesService {

  getAllColorPalettes(): Observable<IColorPalette[]> {
    const palettes: IColorPalette[] = [
      {
        id: 1,
        title: 'Standard',
        colors: ['#64dd17', '#d4e157', '#ffd600', '#f4511e', '#d50000']
      },
      {
        id: 2,
        title: 'Neon',
        colors: ['#76ff03', '#18ffff', '#ffff00', '#d500f9', '#f50057']
      },
      {
        id: 3,
        title: 'Grauwolf',
        colors: ['#bdbdbd', '#9e9e9e', '#616161', '#424242', '#212121']
      }
    ];

    return of(palettes);
  }
}
