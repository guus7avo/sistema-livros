import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLivroComponent } from './cadastrar-livro.component';

describe('CadastrarLivroComponent', () => {
  let component: CadastrarLivroComponent;
  let fixture: ComponentFixture<CadastrarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
