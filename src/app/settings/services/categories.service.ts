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
        created: null
      },
      {
        id: 2,
        title: 'Stimmung',
        description: 'Wie hast du dich heute gefühlt?',
        activated: true,
        created: null
      }
    ];

    return of(categories);
  }
}
