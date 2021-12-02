import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Livro } from './models/livro.models';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore) { }

  create(livro: Livro){
    livro.id = this.afs.createId()
    return this.afs.collection('Livros').doc(livro.id).set(livro)
  }

  list(){

  }

  update(livro: Livro){
    return this.afs.collection('Livros').doc(livro.id).set(livro)
  }

  delete(){
    
  }
}
