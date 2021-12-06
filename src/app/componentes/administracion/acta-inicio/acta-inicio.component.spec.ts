import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaInicioComponent } from './acta-inicio.component';

describe('ActaInicioComponent', () => {
  let component: ActaInicioComponent;
  let fixture: ComponentFixture<ActaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
