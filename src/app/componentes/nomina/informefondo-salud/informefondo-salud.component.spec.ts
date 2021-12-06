import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformefondoSaludComponent } from './informefondo-salud.component';

describe('InformefondoSaludComponent', () => {
  let component: InformefondoSaludComponent;
  let fixture: ComponentFixture<InformefondoSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformefondoSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformefondoSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
