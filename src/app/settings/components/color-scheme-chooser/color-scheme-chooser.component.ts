import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SettingsState} from '../../state/settings.state';
import {Observable} from 'rxjs';
import {DefaultColorPalette, IColorPalette} from '../../models/settings.model';
import {ActionSettingsSetActiveColorPalette} from '../../state/settings.actions';
import {ColorPalettesUtility} from '../../util/color-palettes.util';

@Component({
  selector: 'pt-color-scheme-chooser',
  templateUrl: './color-scheme-chooser.component.html',
  styleUrls: ['./color-scheme-chooser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorSchemeChooserComponent implements OnInit {

  @Select(SettingsState.activeColorPalette) activeColorPalette$: Observable<IColorPalette>;

  @Select(SettingsState.colorPalettes) colorPalettes$: Observable<IColorPalette[]>;

  defaultColorPalette = DefaultColorPalette;

  utility = ColorPalettesUtility;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  selectColorPalette(selectedColorPalette: IColorPalette) {
    this.store.dispatch(new ActionSettingsSetActiveColorPalette(selectedColorPalette));
  }

  compareOptions(i1: IColorPalette, i2: IColorPalette) {
    return i1 && i2 ? i1.id === i2.id : i1 === i2;
  }

}
