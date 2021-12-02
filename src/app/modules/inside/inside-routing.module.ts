import { AuthGuard } from './../../core/services/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './components/pages/autor/autor.component';
import { BibliotecaComponent } from './components/pages/biblioteca/biblioteca.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LivroComponent } from './components/pages/livro/livro.component';
import { MeusLivrosComponent } from './components/pages/meus-livros/meus-livros.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CadastrarLivroComponent } from './components/dialogs/cadastrar-livro/cadastrar-livro.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    data: { title: 'Sidenav', breadcrumb: 'Sidenav' },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Home', breadcrumb: 'Home' },
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        data: { title: 'Perfil', breadcrumb: 'Perfil' },
      },
      {
        path: 'meus-livros',
        component: MeusLivrosComponent,
        data: { title: 'Meus-Livros', breadcrumb: 'Meus-Livros' },
      },
      {
        path: 'biblioteca',
        component: BibliotecaComponent,
        data: { title: 'Biblioteca', breadcrumb: 'Biblioteca' },
      },
      {
        path: 'livro',
        component: LivroComponent,
        data: { title: 'Livro', breadcrumb: 'Livro' },
      },
      {
        path: 'autor',
        component: AutorComponent,
        data: { title: 'Autor', breadcrumb: 'Autor' },
      },
      {
        path: 'cadastrar-livro',
        component: CadastrarLivroComponent,
        data: { title: 'Cadastrar-Livro', breadcrumb: 'Cadastrar-Livro' },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideRoutingModule { }
