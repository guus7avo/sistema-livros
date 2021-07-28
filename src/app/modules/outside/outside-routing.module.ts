import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ToolbarComponent,
    data: { title: 'toolbar', breadcrumb: 'toolbar' },
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: { title: 'Welcome', breadcrumb: 'Welcome' },
      },
      {
        path: 'sobre',
        component: SobreComponent,
        data: { title: 'Sobre', breadcrumb: 'Sobre' },
      },
      {
        path: 'contato',
        component: ContatoComponent,
        data: { title: 'Contato', breadcrumb: 'Contato' },
      },

      {
        path: 'login',
        loadChildren: () => import('./../account/account.module').then((m) => m.AccountModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideRoutingModule { }
