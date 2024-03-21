import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningphaseComponent } from './planningphase.component';

describe('PlanningphaseComponent', () => {
  let component: PlanningphaseComponent;
  let fixture: ComponentFixture<PlanningphaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningphaseComponent]
    });
    fixture = TestBed.createComponent(PlanningphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
