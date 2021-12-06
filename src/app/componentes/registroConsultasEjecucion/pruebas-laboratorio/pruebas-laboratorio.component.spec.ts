import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasLaboratorioComponent } from './pruebas-laboratorio.component';

describe('PruebasLaboratorioComponent', () => {
  let component: PruebasLaboratorioComponent;
  let fixture: ComponentFixture<PruebasLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
