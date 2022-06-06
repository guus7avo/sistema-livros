import { AuthService } from './../../../../core/services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  title = 'sistema-livros';
  public user_name: any;
  public user_photo: any;

  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;

 constructor(private observer: BreakpointObserver, public afAuth: AngularFireAuth,
  private firestore: AngularFirestore, private authService: AuthService, public crud: CrudService) {
    this.afAuth.authState.subscribe((user)=>{
      this.user_name = user?.displayName;
      this.user_photo = user?.photoURL;
      console.log(this.user_name)
      })
  }

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
  this.authService.SignOut();
}

  // showFiller = false;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}

}
