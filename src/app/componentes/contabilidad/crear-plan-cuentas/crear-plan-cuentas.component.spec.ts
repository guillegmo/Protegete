import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanCuentasComponent } from './crear-plan-cuentas.component';

describe('CrearPlanCuentasComponent', () => {
  let component: CrearPlanCuentasComponent;
  let fixture: ComponentFixture<CrearPlanCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlanCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
