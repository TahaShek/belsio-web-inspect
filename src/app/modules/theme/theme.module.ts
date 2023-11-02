import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule,Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    ComponentsModule
  ]
})
export class ThemeModule { }
