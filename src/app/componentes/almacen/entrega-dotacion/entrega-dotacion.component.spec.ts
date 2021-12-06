import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaDotacionComponent } from './entrega-dotacion.component';

describe('EntregaDotacionComponent', () => {
  let component: EntregaDotacionComponent;
  let fixture: ComponentFixture<EntregaDotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaDotacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaDotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
