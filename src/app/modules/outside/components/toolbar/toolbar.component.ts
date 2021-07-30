import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'Marcador de Livros';
  isAuthenticated = false;

  constructor() { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    // todo
  }

}
