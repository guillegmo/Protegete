import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMaquinariaComponent } from './informe-maquinaria.component';

describe('InformeMaquinariaComponent', () => {
  let component: InformeMaquinariaComponent;
  let fixture: ComponentFixture<InformeMaquinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeMaquinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
