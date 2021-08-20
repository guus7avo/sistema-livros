import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }

  signupUser(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            let emailLower = user.email.toLowerCase();
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

  signOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }


}
