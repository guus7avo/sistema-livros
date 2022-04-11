import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CrudService } from 'src/app/core/services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  nomeUsuario = 'Nome Usuário'
  qtdLivrosLidos = 10;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {cols: 2, rows: 1,
          }
        ];
      }

      return [
        {cols: 1, rows: 1,
        }
      ];
    })
  );

  public user_name: any;
  public user_photo: any;

  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth, public crud: CrudService) {
    this.afAuth.authState.subscribe((user)=>{
      this.user_name = user?.displayName;
      this.user_photo = user?.photoURL;
      console.log(this.user_name)
      })
  }
}
