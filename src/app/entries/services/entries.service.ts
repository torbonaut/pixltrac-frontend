import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IEntry} from '../models/entries.model';

@Injectable()
export class EntriesService {
  constructor() {}

  loadEntries(): Observable<IEntry[]> {
    return of([
      { id: 1, date: new Date(), category: 1, score: 5, note: ''}
    ]);
  }
}
