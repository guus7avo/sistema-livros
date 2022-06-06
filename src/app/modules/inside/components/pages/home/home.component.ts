import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  usuario = "Usuário";
/** Based on the screen size, switch from standard to one column per row */
cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        {cols: 2, rows: 2,
        }
      ];
    }

    return [
      {cols: 2, rows: 2,
      }
    ];
  })
);
  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth, public crud: CrudService, public authService: AuthService) {}
}
