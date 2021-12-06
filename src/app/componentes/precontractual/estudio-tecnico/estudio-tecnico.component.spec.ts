import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioTecnicoComponent } from './estudio-tecnico.component';

describe('EstudioTecnicoComponent', () => {
  let component: EstudioTecnicoComponent;
  let fixture: ComponentFixture<EstudioTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
