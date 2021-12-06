import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaTecnicaInicialComponent } from './acta-tecnica-inicial.component';

describe('ActaTecnicaInicialComponent', () => {
  let component: ActaTecnicaInicialComponent;
  let fixture: ComponentFixture<ActaTecnicaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActaTecnicaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaTecnicaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
