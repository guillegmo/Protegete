import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDetalladoComponent } from './balance-detallado.component';

describe('BalanceDetalladoComponent', () => {
  let component: BalanceDetalladoComponent;
  let fixture: ComponentFixture<BalanceDetalladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceDetalladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
