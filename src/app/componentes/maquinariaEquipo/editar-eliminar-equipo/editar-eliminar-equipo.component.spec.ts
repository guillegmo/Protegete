import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEliminarEquipoComponent } from './editar-eliminar-equipo.component';

describe('EditarEliminarEquipoComponent', () => {
  let component: EditarEliminarEquipoComponent;
  let fixture: ComponentFixture<EditarEliminarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEliminarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEliminarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
