import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICategory} from '../models/settings.model';

@Injectable()
export class CategoriesService {
  constructor() {}

  getAllCategories(): Observable<ICategory[]> {
    const categories: ICategory[] = [
      {
        id: 1,
        title: 'Schlaf',
        description: 'Wie gut hast du heute geschlafen?',
        activated: true,
        iconUrl: '',
        labels: ['Sehr gut', 'Gut', 'Befriedigend', 'Nicht gut', 'Fast gar nicht'],
        created: null
      },
      {
        id: 2,
        title: 'Stimmung',
        description: 'Wie hast du dich heute gefühlt?',
        activated: true,
        iconUrl: '',
        labels: ['Superduper', 'in Ordnung', 'Mies'],
        created: null
      }
    ];

    return of(categories);
  }
}
