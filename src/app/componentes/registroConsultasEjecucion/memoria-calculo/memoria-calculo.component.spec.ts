import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaCalculoComponent } from './memoria-calculo.component';

describe('MemoriaCalculoComponent', () => {
  let component: MemoriaCalculoComponent;
  let fixture: ComponentFixture<MemoriaCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriaCalculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
