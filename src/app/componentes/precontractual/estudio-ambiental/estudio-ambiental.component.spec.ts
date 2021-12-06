import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAmbientalComponent } from './estudio-ambiental.component';

describe('EstudioAmbientalComponent', () => {
  let component: EstudioAmbientalComponent;
  let fixture: ComponentFixture<EstudioAmbientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioAmbientalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioAmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
