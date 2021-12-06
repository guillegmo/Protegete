import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosLaboralesComponent } from './riesgos-laborales.component';

describe('RiesgosLaboralesComponent', () => {
  let component: RiesgosLaboralesComponent;
  let fixture: ComponentFixture<RiesgosLaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgosLaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgosLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
