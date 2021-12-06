import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDocumentosComponent } from './crear-documentos.component';

describe('CrearDocumentosComponent', () => {
  let component: CrearDocumentosComponent;
  let fixture: ComponentFixture<CrearDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
