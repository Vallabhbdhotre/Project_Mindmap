import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealearshipComponent } from './dealearship.component';

describe('DealearshipComponent', () => {
  let component: DealearshipComponent;
  let fixture: ComponentFixture<DealearshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealearshipComponent]
    });
    fixture = TestBed.createComponent(DealearshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
