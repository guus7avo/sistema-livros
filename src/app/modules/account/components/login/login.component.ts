import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from './../../../../core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


// Form Email
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.loginForm = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required)
    });

    this.firebaseErrorMessage = '';
}

  ngOnInit(): void {
  }

    loginUser() {
        if (this.loginForm.invalid)
            return;

        this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
            if (result == null) {                               // null is success, false means there was an error
                console.log('logging in...');
                this.router.navigate(['./app']);                // when the user is logged in, navigate them to dashboard
            }
            else if (result.isValid == false) {
                console.log('login error', result);
                this.firebaseErrorMessage = result.message;
            }
        });
    }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  hide = true;





}
