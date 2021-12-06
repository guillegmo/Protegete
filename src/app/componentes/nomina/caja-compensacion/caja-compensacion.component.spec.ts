import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaCompensacionComponent } from './caja-compensacion.component';

describe('CajaCompensacionComponent', () => {
  let component: CajaCompensacionComponent;
  let fixture: ComponentFixture<CajaCompensacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaCompensacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaCompensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
