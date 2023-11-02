import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnaggingRoutingModule } from './snagging-routing.module';
import { SnaggingHomeComponent } from './snagging-home/snagging-home.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    SnaggingHomeComponent
  ],
  imports: [
    CommonModule,
    SnaggingRoutingModule,
    ComponentsModule
  ]
})
export class SnaggingModule { }
