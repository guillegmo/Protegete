import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformefondoPensionesComponent } from './informefondo-pensiones.component';

describe('InformefondoPensionesComponent', () => {
  let component: InformefondoPensionesComponent;
  let fixture: ComponentFixture<InformefondoPensionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformefondoPensionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformefondoPensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
