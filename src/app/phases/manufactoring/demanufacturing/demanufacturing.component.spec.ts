import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanufacturingComponent } from './demanufacturing.component';

describe('DemanufacturingComponent', () => {
  let component: DemanufacturingComponent;
  let fixture: ComponentFixture<DemanufacturingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemanufacturingComponent]
    });
    fixture = TestBed.createComponent(DemanufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
