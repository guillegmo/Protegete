import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsientoComponent } from './registrar-asiento.component';

describe('RegistrarAsientoComponent', () => {
  let component: RegistrarAsientoComponent;
  let fixture: ComponentFixture<RegistrarAsientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAsientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
