import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeCajaCompensacionComponent } from './informe-caja-compensacion.component';

describe('InformeCajaCompensacionComponent', () => {
  let component: InformeCajaCompensacionComponent;
  let fixture: ComponentFixture<InformeCajaCompensacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeCajaCompensacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeCajaCompensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
