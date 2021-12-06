import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMaquinariaEquipoComponent } from './informe-maquinaria-equipo.component';

describe('InformeMaquinariaEquipoComponent', () => {
  let component: InformeMaquinariaEquipoComponent;
  let fixture: ComponentFixture<InformeMaquinariaEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeMaquinariaEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeMaquinariaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
