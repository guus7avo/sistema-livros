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

  firebaseErrorMessage: string;

  constructor(public authService: AuthService) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  hide = true;

}
