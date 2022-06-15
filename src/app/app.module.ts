import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LogService } from './core/services/log.service';
import { MatDialogModule } from '@angular/material/dialog';

// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    // AngularFireModule.initializeApp(environment.firebase)
    MatDialogModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
