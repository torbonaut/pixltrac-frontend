import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenSettingsComponent } from './screens/screen-settings/screen-settings.component';
import { ColorSchemeChooserComponent } from './components/color-scheme-chooser/color-scheme-chooser.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import {NgxsModule} from '@ngxs/store';
import {SettingsState} from './state/settings.state';
import {ColorPalettesService} from './services/color-palettes.service';
import { CategoriesComponent } from './components/categories/categories.component';
import {CategoriesService} from './services/categories.service';
import {ScreenEditCategoryComponent} from './screens/screen-edit-category/screen-edit-category.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { LanguageComponent } from './components/language/language.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

@NgModule({
  declarations: [
    ScreenSettingsComponent,
    ColorSchemeChooserComponent,
    CategoriesComponent,
    ScreenEditCategoryComponent,
    LanguageComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatSlideToggleModule,
    NgxsModule.forFeature([SettingsState]),
    RouterModule,
    ReactiveFormsModule,
    MatInputModule
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
export class SettingsModule {}
