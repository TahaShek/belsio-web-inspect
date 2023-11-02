import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/theme/layout/layout.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    // canLoad: [UnAuthorizationGuard],
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'snagging',
        loadChildren:()=>import('./modules/snagging/snagging.module').then(
          (m)=>m.SnaggingModule
        )
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
