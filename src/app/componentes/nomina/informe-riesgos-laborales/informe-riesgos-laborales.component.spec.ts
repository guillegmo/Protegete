import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeRiesgosLaboralesComponent } from './informe-riesgos-laborales.component';

describe('InformeRiesgosLaboralesComponent', () => {
  let component: InformeRiesgosLaboralesComponent;
  let fixture: ComponentFixture<InformeRiesgosLaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeRiesgosLaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeRiesgosLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
