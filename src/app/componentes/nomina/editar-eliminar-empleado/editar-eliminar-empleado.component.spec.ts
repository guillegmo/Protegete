import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEliminarEmpleadoComponent } from './editar-eliminar-empleado.component';

describe('EditarEliminarEmpleadoComponent', () => {
  let component: EditarEliminarEmpleadoComponent;
  let fixture: ComponentFixture<EditarEliminarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEliminarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEliminarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
