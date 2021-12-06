import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionesAveriasComponent } from './devoluciones-averias.component';

describe('DevolucionesAveriasComponent', () => {
  let component: DevolucionesAveriasComponent;
  let fixture: ComponentFixture<DevolucionesAveriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucionesAveriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionesAveriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
