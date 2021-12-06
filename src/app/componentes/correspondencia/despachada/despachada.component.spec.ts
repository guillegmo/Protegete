import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachadaComponent } from './despachada.component';

describe('DespachadaComponent', () => {
  let component: DespachadaComponent;
  let fixture: ComponentFixture<DespachadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespachadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespachadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
