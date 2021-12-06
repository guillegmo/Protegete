import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlHerramientaComponent } from './control-herramienta.component';

describe('ControlHerramientaComponent', () => {
  let component: ControlHerramientaComponent;
  let fixture: ComponentFixture<ControlHerramientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlHerramientaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
