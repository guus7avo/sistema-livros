import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/outside/outside.module').then((m) => m.OutsideModule),
  },
  {
    path: 'app',
    loadChildren: () => import('../app/modules/inside/inside.module').then((m) => m.InsideModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
