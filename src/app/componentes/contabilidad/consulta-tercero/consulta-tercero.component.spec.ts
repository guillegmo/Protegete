import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTerceroComponent } from './consulta-tercero.component';

describe('ConsultaTerceroComponent', () => {
  let component: ConsultaTerceroComponent;
  let fixture: ComponentFixture<ConsultaTerceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaTerceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
