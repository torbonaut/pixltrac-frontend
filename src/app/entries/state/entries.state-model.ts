import {IEntry} from '../models/entries.model';

export interface IEntriesStateModel {
  entries: IEntry[];
}

export const entriesDefaultState = {
  entries: []
};
