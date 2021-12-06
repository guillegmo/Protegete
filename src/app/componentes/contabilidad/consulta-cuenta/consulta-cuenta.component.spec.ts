import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCuentaComponent } from './consulta-cuenta.component';

describe('ConsultaCuentaComponent', () => {
  let component: ConsultaCuentaComponent;
  let fixture: ComponentFixture<ConsultaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
