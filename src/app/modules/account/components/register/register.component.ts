import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AuthService } from './../../../../core/services/auth.service';
import { Router } from '@angular/router';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  hide = true;

  signupForm!: FormGroup; //erro aqui
  firebaseErrorMessage: String;

  constructor(public authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.firebaseErrorMessage = "";
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'displayName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
    })
  }

  signup(){
    if (this.signupForm.invalid)
      return;

    this.authService.signupUser(this.signupForm.value).then((result) => {
      if (result == null)
        this.router.navigate(['/app']);
      else if (result.isValid == false)
        this.firebaseErrorMessage = result.message;
    }).catch(() => {

    });
  }
}
