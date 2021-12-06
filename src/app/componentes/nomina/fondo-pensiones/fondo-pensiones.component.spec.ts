import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoPensionesComponent } from './fondo-pensiones.component';

describe('FondoPensionesComponent', () => {
  let component: FondoPensionesComponent;
  let fixture: ComponentFixture<FondoPensionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoPensionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoPensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
