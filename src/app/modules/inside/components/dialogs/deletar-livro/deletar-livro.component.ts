import { Livro } from './../../../../../core/services/models/livro.models';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { LogService } from 'src/app/core/services/log.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletar-livro',
  templateUrl: './deletar-livro.component.html',
  styleUrls: ['./deletar-livro.component.scss']
})
export class DeletarLivroComponent {

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

  ngOnInit(): void {
  }

}
