import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSupervisorComponent } from './menu-supervisor.component';

describe('MenuSupervisorComponent', () => {
  let component: MenuSupervisorComponent;
  let fixture: ComponentFixture<MenuSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
