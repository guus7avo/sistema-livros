import { AuthService } from './../../core/services/auth.service';
import { AuthGuard } from './../../core/services/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/pages/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { MeusLivrosComponent } from './components/pages/meus-livros/meus-livros.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BibliotecaComponent } from './components/pages/biblioteca/biblioteca.component';
import { LivroComponent } from './components/pages/livro/livro.component';
import { AutorComponent } from './components/pages/autor/autor.component';

import { environment } from './../../../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CadastrarLivroComponent } from './components/dialogs/cadastrar-livro/cadastrar-livro.component';
import { EditarLivroComponent } from './components/dialogs/editar-livro/editar-livro.component';
import { DeletarLivroComponent } from './components/dialogs/deletar-livro/deletar-livro.component';

@NgModule({
  declarations: [SidenavComponent, HomeComponent, PerfilComponent, MeusLivrosComponent, BibliotecaComponent, 
    LivroComponent, AutorComponent, CadastrarLivroComponent, EditarLivroComponent, DeletarLivroComponent, ],
  imports: [
    CommonModule,
    InsideRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSortModule,
    FlexLayoutModule,

    AngularFireModule.initializeApp(environment.firebase),

    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [AuthGuard, AuthService, CrudService]
})
export class InsideModule { }
