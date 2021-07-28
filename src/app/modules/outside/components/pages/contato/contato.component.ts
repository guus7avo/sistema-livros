import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 }
      ];
    })
  );

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
