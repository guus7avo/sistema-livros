import { Component, Inject } from '@angular/core';
import { Livro } from './../../../../../core/services/models/livro.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { LogService } from 'src/app/core/services/log.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.scss']
})
export class EditarLivroComponent {

  formLivro: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private logService: LogService, private formBuilder: FormBuilder,
    private crud: CrudService, public dialog: MatDialog) {
      this.formLivro = formBuilder.group({
        id: [''],
        titulo: ['', Validators.compose([Validators.required])],
        autor: ['', Validators.compose([Validators.required])],
        genero: ['', Validators.compose([Validators.required])]
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

  ngOnInit(): void {
  }

}
