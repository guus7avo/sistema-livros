import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideRoutingModule } from './outside-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [WelcomeComponent, SobreComponent, ContatoComponent, ToolbarComponent],
  imports: [
    CommonModule,
    OutsideRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule

  ]
})
export class OutsideModule { }
