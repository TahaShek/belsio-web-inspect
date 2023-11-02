import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/components/prime.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
const COMPONENTS = [

];

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeModule,
    MatProgressSpinnerModule

  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    MatProgressSpinnerModule

  ]
})
export class ComponentsModule { }
