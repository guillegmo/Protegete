import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioJuridicoComponent } from './estudio-juridico.component';

describe('EstudioJuridicoComponent', () => {
  let component: EstudioJuridicoComponent;
  let fixture: ComponentFixture<EstudioJuridicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioJuridicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
