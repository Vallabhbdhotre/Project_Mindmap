import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchphaseComponent } from './researchphase.component';

describe('ResearchphaseComponent', () => {
  let component: ResearchphaseComponent;
  let fixture: ComponentFixture<ResearchphaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchphaseComponent]
    });
    fixture = TestBed.createComponent(ResearchphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
