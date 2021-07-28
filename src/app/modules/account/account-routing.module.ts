import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login', breadcrumb: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register', breadcrumb: 'Register' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
