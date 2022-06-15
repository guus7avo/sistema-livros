import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLivroComponent } from './editar-livro.component';

describe('EditarLivroComponent', () => {
  let component: EditarLivroComponent;
  let fixture: ComponentFixture<EditarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
