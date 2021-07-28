import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
  constructor(private breakpointObserver: BreakpointObserver) {}
}
