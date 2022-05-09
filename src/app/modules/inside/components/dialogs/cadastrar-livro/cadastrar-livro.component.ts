import { Livro } from './../../../../../core/services/models/livro.models';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { LogService } from 'src/app/core/services/log.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.scss']
})
export class CadastrarLivroComponent {

  // formLivro: FormGroup;

  public modalData = { titulo: null, autor: null, genero: null, type: null }
  public title = 'Criar'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CadastrarLivroComponent>) {
      Object.assign(this.modalData, data);
      this.title = (this.modalData.type != 'create') ? 'Atualizar' : 'Criar';


      // this.formLivro = formBuilder.group({
      //   id: [''],
      //   titulo: ['', Validators.compose([Validators.required])],
      //   autor: ['', Validators.compose([Validators.required])],
      //   genero: ['', Validators.compose([Validators.required])]
      // })
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  // addLivros() {
  //   if(this.formLivro.valid){
  //     this.crud.save(this.formLivro.value)
  //     .then((res)=>{
  //       this.formLivro.reset()
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

  // updateLivro() {
  //   if(this.formLivro.valid){
  //     this.crud.update(this.formLivro.value)
  //     .then((res)=>{
  //       this.formLivro.reset()
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
}
