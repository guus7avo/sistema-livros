import { AuthService } from './../../../../core/services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  title = 'sistema-livros';


  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;

 constructor(private observer: BreakpointObserver, public afAuth: AngularFireAuth, private firestore: AngularFirestore, private authService: AuthService) {}

 ngAfterViewInit() {
   setTimeout(() => {
     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   })
 }

 logout() {
  this.authService.signOut();
}

  // showFiller = false;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}

}
