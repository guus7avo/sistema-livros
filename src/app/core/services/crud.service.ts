import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Livro } from './models/livro.models';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public lista: any;
  public user_id: any;
  public user_name: any;
  public user_photo: any;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user)=>{
      this.user_id = user?.uid;
      this.user_name = user?.displayName;
      this.user_photo = user?.photoURL;
      console.log(this.user_id)
      console.log(this.user_name)
      console.log(this.user_photo)
      // this.list(this.user_id)

      this.list();
      })
   }

  save(livro: Livro){
    livro.id == "" ? livro.id = this.afs.createId() : livro.id = livro.id
    return this.afs.collection('Livros').doc(livro.id).set(livro, { merge: true })
  }

  list(){
    this.lista = this.afs.collection('Livros').valueChanges();
  }

  // update(livro: Livro){
  //   return this.afs.collection('Livros').doc(livro.id).set(livro, { merge: true })
  // }

  delete(id: string){
    return this.afs.collection('Livros').doc(id).delete()
  }
}
