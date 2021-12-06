import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioFinancieroComponent } from './estudio-financiero.component';

describe('EstudioFinancieroComponent', () => {
  let component: EstudioFinancieroComponent;
  let fixture: ComponentFixture<EstudioFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioFinancieroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
