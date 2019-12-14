import {IEntry} from '../models/entries.model';

export class ActionEntriesAddOne {
  static readonly type = '[Entries] Add One';
  constructor(public entry: IEntry) {}
}

export class ActionEntriesAddMany {
  static readonly type = '[Entries] Add Many';
  constructor(public entries: IEntry[]) {}
}

export class ActionEntriesUpdate {
  static readonly type = '[Entries] Update One';
  constructor(public entry: IEntry) {}
}

export class ActionEntriesDelete {
  static readonly type = '[Entries] Delete One';
  constructor(public id: number) {}
}

export class ActionEntriesLoad {
  static readonly type = '[Entries] Load';
}
