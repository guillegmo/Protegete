import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAdministrativoComponent } from './estudio-administrativo.component';

describe('EstudioAdministrativoComponent', () => {
  let component: EstudioAdministrativoComponent;
  let fixture: ComponentFixture<EstudioAdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioAdministrativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
