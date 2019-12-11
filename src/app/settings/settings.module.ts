import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenSettingsComponent } from './screens/screen-settings/screen-settings.component';
import { ColorSchemeChooserComponent } from './components/color-scheme-chooser/color-scheme-chooser.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, MatSelectModule} from '@angular/material';
import {NgxsModule} from '@ngxs/store';
import {SettingsState} from './state/settings.state';
import {ColorPalettesService} from './services/color-palettes.service';
import { CategoriesComponent } from './components/categories/categories.component';
import {CategoriesService} from './services/categories.service';
import {ScreenEditCategoryComponent} from './screens/screen-edit-category/screen-edit-category.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { LanguageComponent } from './components/language/language.component';



@NgModule({
  declarations: [ScreenSettingsComponent, ColorSchemeChooserComponent, CategoriesComponent, ScreenEditCategoryComponent, LanguageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    NgxsModule.forFeature([SettingsState]),
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ScreenSettingsComponent,
    ScreenEditCategoryComponent
  ],
  providers: [
    ColorPalettesService,
    CategoriesService
  ]
})
export class SettingsModule { }
