import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoSaludComponent } from './fondo-salud.component';

describe('FondoSaludComponent', () => {
  let component: FondoSaludComponent;
  let fixture: ComponentFixture<FondoSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
