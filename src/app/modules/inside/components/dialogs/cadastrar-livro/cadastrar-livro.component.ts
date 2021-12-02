import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { LogService } from 'src/app/core/services/log.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.scss']
})
export class CadastrarLivroComponent {

  formLivro: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private logService: LogService, private formBuilder: FormBuilder, 
    private crud: CrudService, public dialog: MatDialog) {
      this.formLivro = formBuilder.group({
        titulo: ['', Validators.compose([Validators.required])],
        autor: ['', Validators.compose([Validators.required])],
        genero: ['', Validators.compose([Validators.required])]
      })
  }

  addLivros() {
    if(this.formLivro.valid){
      this.crud.create(this.formLivro.value)
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
}
