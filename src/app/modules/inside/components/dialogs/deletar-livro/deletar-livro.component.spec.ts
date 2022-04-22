import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarLivroComponent } from './deletar-livro.component';

describe('DeletarLivroComponent', () => {
  let component: DeletarLivroComponent;
  let fixture: ComponentFixture<DeletarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
