import { AuthService } from './../../core/services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { ReactiveFormsModule } from '@angular/forms';

import { environment } from './../../../environments/environment';
import { AngularFireModule } from '@angular/fire';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),


    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AccountModule { }
