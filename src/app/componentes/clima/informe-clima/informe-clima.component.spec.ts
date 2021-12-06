import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeClimaComponent } from './informe-clima.component';

describe('InformeClimaComponent', () => {
  let component: InformeClimaComponent;
  let fixture: ComponentFixture<InformeClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
