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

const ELEMENT_DATA: Livro[] = [
  {id: '', titulo: '', autor: '', genero: ''},
];

 @Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.scss']
})
export class MeusLivrosComponent {

  displayedColumns: string[] = [ 'titulo', 'autor', 'genero', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

   formLivro: FormGroup;

  constructor(private logService: LogService, private formBuilder: FormBuilder,
    public crud: CrudService, public dialog: MatDialog) {

    this.formLivro = formBuilder.group({
      id: [''],
      titulo: ['', Validators.compose([Validators.required])],
      autor: ['', Validators.compose([Validators.required])],
      genero: ['', Validators.compose([Validators.required])]
    })

  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(CadastrarLivroComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  openDialogAdd(){
    let dialogRef = this.dialog.open(CadastrarLivroComponent, {data: {name: 'Nome do usuário'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

  openDialogEdit(livro: Livro){
    let dialogRef = this.dialog.open(EditarLivroComponent, {data: {name: 'Nome do usuário'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

  openDialogDelete(){
    let dialogRef = this.dialog.open(DeletarLivroComponent, {data: {name: 'Nome do usuário'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

  addLivro() {
    if(this.formLivro.valid){
      this.crud.save(this.formLivro.value)
      .then((res)=>{
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })
      this.logService.consoleLog('Livro adicionado');
    } else {
      console.log("Todos os campos são obrigatórios")
    }
  }

  editLivro(livro: Livro){
    this.formLivro.patchValue({
      id: livro.id,
      titulo: livro.titulo,
      autor: livro.autor,
      genero: livro.genero
    })
  }

  deleteLivro(id: string) {
      this.crud.delete(id)
      .then((res)=>{
        console.log("Produto excluído")
        this.logService.consoleLog('Livro excluído');
      })
      .catch((error)=>{
        console.log(error)
      })
  }

}

