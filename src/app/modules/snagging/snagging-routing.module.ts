import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnaggingHomeComponent } from './snagging-home/snagging-home.component';

const routes: Routes = [
  {
    path:'',
    component:SnaggingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnaggingRoutingModule { }
