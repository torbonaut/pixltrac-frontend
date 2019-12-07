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
        dailyQueries: 1,
        dailyQueriesLabels: null,
        iconUrl: '',
        influenceFactor: 1,
        labelsShort: ['Sehr gut', 'Gut', 'Befriedigend', 'Nicht gut', 'Fast gar nicht'],
        labelsLong: ['8+ Stunden', '7-8 Stunden', '6-7 Stunden', '5-6 Stunden', 'weniger als 5 Stunden']
      },
      {
        id: 2,
        title: 'Stimmung',
        description: 'Wie hast du dich heute gefühlt?',
        activated: true,
        dailyQueries: 4,
        dailyQueriesLabels: ['morgens', 'mittags', 'abends', 'nachts'],
        iconUrl: '',
        influenceFactor: 1,
        labelsShort: ['Sehr gut', 'Gut', 'Befriedigend', 'Nicht gut', 'Fast gar nicht'],
        labelsLong: ['8+ Stunden', '7-8 Stunden', '6-7 Stunden', '5-6 Stunden', 'weniger als 5 Stunden']
      }
    ];

    return of(categories);
  }
}
