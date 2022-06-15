// import { AngularFirestore } from '@angular/fire/firestore';
// import { Injectable } from '@angular/core';

// import { AngularFireAuth } from '@angular/fire/auth';
// import { Router } from '@angular/router';

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "./user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  userLoggedIn: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });

    // google auth
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  signupUser(user: any) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            let emailLower = user.email.toLowerCase();

            this.afs.doc('/users/' + emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                    .set({
                        accountType: 'endUser',
                        displayName: user.displayName,
                        displayName_lower: user.displayName.toLowerCase(),
                        email: user.email,
                        email_lower: emailLower
                    });

            result.user?.sendEmailVerification();                    // immediately send the user a verification email
        })
        .catch(error => {
            console.log('Auth Service: signup error', error);
            if (error.code){} //erro aqui
                return { isValid: false, message: error.message };
        });
}

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
          console.log('Auth Service: loginUser: success');
          // this.router.navigate(['/dashboard']);
      })
      .catch(error => {
          console.log('Auth Service: login error...');
          console.log('error code', error.code);
          console.log('error', error);
          if (error.code){} //erro aqui
              return { isValid: false, message: error.message };
      });
  }

  // signOut() {
  //   return this.afAuth.signOut().then(() => {
  //     this.router.navigate(['/login']);
  //   })
  // }

  resetPassword(email: string): Promise<any> {
    return this.afAuth.sendPasswordResetEmail(email)
        .then(() => {
            console.log('Auth Service: reset password success');
            // this.router.navigate(['/amount']);
        })
        .catch(error => {
            console.log('Auth Service: reset password error...');
            console.log(error.code);
            console.log(error)
            if (error.code)
                return error;
        });
  }

  async googleSignin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider); 
    // return this.updateUserData(credential.user);
    console.log('logging in w/ Google...');
    this.router.navigate(['./app']);  
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    // sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data =  {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
    
  }

}
