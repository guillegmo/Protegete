import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBitacoraComponent } from './crear-bitacora.component';

describe('CrearBitacoraComponent', () => {
  let component: CrearBitacoraComponent;
  let fixture: ComponentFixture<CrearBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
