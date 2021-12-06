import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturaContratoComponent } from './apertura-contrato.component';

describe('AperturaContratoComponent', () => {
  let component: AperturaContratoComponent;
  let fixture: ComponentFixture<AperturaContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperturaContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
