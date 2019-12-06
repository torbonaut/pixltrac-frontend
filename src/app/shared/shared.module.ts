import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './components/ui/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './components/ui/layout-header/layout-header.component';
import { LayoutMainComponent } from './components/ui/layout-main/layout-main.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LayoutFooterComponent, LayoutHeaderComponent, LayoutMainComponent],
  exports: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutMainComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ]
})
export class SharedModule { }
