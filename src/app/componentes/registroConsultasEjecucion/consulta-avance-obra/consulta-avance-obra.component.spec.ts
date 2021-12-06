import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAvanceObraComponent } from './consulta-avance-obra.component';

describe('ConsultaAvanceObraComponent', () => {
  let component: ConsultaAvanceObraComponent;
  let fixture: ComponentFixture<ConsultaAvanceObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAvanceObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAvanceObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
