import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/components/prime.module';
const COMPONENTS = [

];

@NgModule({
  declarations: [

    // MatProgressSpinnerModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeModule,

  ]
})
export class ComponentsModule { }
