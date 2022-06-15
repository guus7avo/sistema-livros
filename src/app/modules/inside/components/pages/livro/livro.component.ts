import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
  tituloLivro = 'Aqui está o título do livro'
  nomeAutor = "Autor, Autora"
  usuariosLeram = 2;
  usuariosTotal = 10;

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

  constructor(private breakpointObserver: BreakpointObserver) {}
}
