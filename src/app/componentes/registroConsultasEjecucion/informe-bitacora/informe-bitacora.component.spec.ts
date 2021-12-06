import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeBitacoraComponent } from './informe-bitacora.component';

describe('InformeBitacoraComponent', () => {
  let component: InformeBitacoraComponent;
  let fixture: ComponentFixture<InformeBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
