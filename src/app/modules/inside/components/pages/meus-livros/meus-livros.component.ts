import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { Livro } from './../../../../../core/services/models/livro.models';
//app.component.ts
import { Component, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../dialogs/dialog-box/dialog-box.component';
import { AngularFirestore } from '@angular/fire/firestore';
// import { DeletarLivroComponent } from '../../dialogs/deletar-livro/deletar-livro.component';

// export interface UsersData {
//   name: string;
//   id: number;
// }

// const ELEMENT_DATA: Livro[] = [
//   {id: '', titulo: '', autor: '', genero: ''}
// ];
@Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.scss']
})
export class MeusLivrosComponent {
  displayedColumns: string[] = ['id', 'titulo', 'autor', 'genero', 'action'];
  public book: any;

  formLivro: FormGroup;

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  constructor(public dialog: MatDialog, public crud: CrudService, private afs: AngularFirestore, private formBuilder: FormBuilder) {
    this.book = this.afs.collection('Livros').valueChanges()

    this.formLivro = formBuilder.group({
      id: [''],
      titulo: ['', Validators.compose([Validators.required])],
      autor: ['', Validators.compose([Validators.required])],
      genero: ['', Validators.compose([Validators.required])]
    })

  }

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  // addRowData(row_obj: { name: any; }){
  //   var d = new Date();
  //   this.book.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.table.renderRows();

  // }

  editLivro(livro: Livro){
    this.formLivro.patchValue({
      id: livro.id,
      titulo: livro.titulo,
      autor: livro.autor,
      genero: livro.genero
    })
  }

  updateRowData(livro: Livro){
    this.book = this.formLivro.patchValue({
      id: livro.id,
      titulo: livro.titulo,
      autor: livro.autor,
      genero: livro.genero
    });
  }
  deleteRowData(row_obj: { id: string; }){
    this.book = this.book.filter((value: { id: string; },key: any)=>{
      return value.id != row_obj.id;
    });
  }
}

// openDialogAdd(){
//   let dialogRef = this.dialog.open(CadastrarLivroComponent, {data: {name: 'Nome do usuário'}});

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`)
//   })
// }

// openDialogEdit(livro: Livro){
//   let dialogRef = this.dialog.open(EditarLivroComponent, {data: {name: 'Nome do usuário'}});

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`)
//   })
// }

// openDialogDelete(){
//   let dialogRef = this.dialog.open(DeletarLivroComponent, {data: {name: 'Nome do usuário'}});

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`)
//   })
// }

// addLivro() {
//   if(this.formLivro.valid){
//     this.crud.save(this.formLivro.value)
//     .then((res)=>{
//       console.log(res)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//     this.logService.consoleLog('Livro adicionado');
//   } else {
//     console.log("Todos os campos são obrigatórios")
//   }
// }

// editLivro(livro: Livro){
//   this.formLivro.patchValue({
//     id: livro.id,
//     titulo: livro.titulo,
//     autor: livro.autor,
//     genero: livro.genero
//   })
// }

// deleteLivro(id: string) {
//     this.crud.delete(id)
//     .then((res)=>{
//       console.log("Produto excluído")
//       this.logService.consoleLog('Livro excluído');
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
// }
