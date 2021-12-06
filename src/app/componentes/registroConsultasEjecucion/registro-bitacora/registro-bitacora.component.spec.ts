import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBitacoraComponent } from './registro-bitacora.component';

describe('RegistroBitacoraComponent', () => {
  let component: RegistroBitacoraComponent;
  let fixture: ComponentFixture<RegistroBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
