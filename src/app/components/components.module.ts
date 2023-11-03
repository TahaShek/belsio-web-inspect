import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/components/prime.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


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
    MatProgressSpinnerModule,
    MatButtonModule, MatMenuModule, MatIconModule

  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    MatProgressSpinnerModule,
    MatButtonModule, MatMenuModule, MatIconModule


  ]
})
export class ComponentsModule { }
