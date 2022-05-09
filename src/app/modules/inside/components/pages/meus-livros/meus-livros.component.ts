import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CrudService } from 'src/app/core/services/crud.service';
import { LogService } from 'src/app/core/services/log.service';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarLivroComponent } from '../../dialogs/cadastrar-livro/cadastrar-livro.component';
import { Livro } from 'src/app/core/services/models/livro.models';
import { EditarLivroComponent } from '../../dialogs/editar-livro/editar-livro.component';
import { DeletarLivroComponent } from '../../dialogs/deletar-livro/deletar-livro.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

const ELEMENT_DATA: Livro[] = [
  {id: '', titulo: '', autor: '', genero: ''},
];

 @Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.scss']
})
export class MeusLivrosComponent {

  displayedColumns: string[] = [ 'titulo', 'autor', 'genero', 'acoes'];
  dataSource: any;
  dbName = 'Livros';

  constructor(private logService: LogService, private formBuilder: FormBuilder,
    public crud: CrudService, public dialog: MatDialog, private afd: AngularFireDatabase) {
      this.dataSource = this.afd.list(this.dbName)
      .snapshotChanges()
      .pipe(
        map(items => {
          return items.map(item => {
            return Object.assign({ key: item.payload.key }, item.payload.val())
          })
        })
      )
  }

  insert(){
    const dialogRef = this.dialog.open(CadastrarLivroComponent, {
      width: '250px',
      data: { type: 'create'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.afd.list(this.dbName).push(result)
      }
    });
  }

  editLivro(data: any){
    const dialogRef = this.dialog.open(CadastrarLivroComponent, {
      width: '250px',
      data: { ...data, type: 'update'}
    });
    console.log('saiu de editLivro()')

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.afd.list(this.dbName).update( data.key, result )
      }
    });
  }

  // deleteLivro(key){
  //   this.afd.list(this.dbName).remove(key);
  // }

}

