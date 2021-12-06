import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibidaComponent } from './recibida.component';

describe('RecibidaComponent', () => {
  let component: RecibidaComponent;
  let fixture: ComponentFixture<RecibidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
