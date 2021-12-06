import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaEquipoComponent } from './maquinaria-equipo.component';

describe('MaquinariaEquipoComponent', () => {
  let component: MaquinariaEquipoComponent;
  let fixture: ComponentFixture<MaquinariaEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinariaEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
