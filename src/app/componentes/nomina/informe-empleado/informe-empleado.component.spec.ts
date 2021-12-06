import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeEmpleadoComponent } from './informe-empleado.component';

describe('InformeEmpleadoComponent', () => {
  let component: InformeEmpleadoComponent;
  let fixture: ComponentFixture<InformeEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
