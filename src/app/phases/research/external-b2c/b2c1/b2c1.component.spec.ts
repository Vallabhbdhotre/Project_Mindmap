import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2c1Component } from './b2c1.component';

describe('B2c1Component', () => {
  let component: B2c1Component;
  let fixture: ComponentFixture<B2c1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2c1Component]
    });
    fixture = TestBed.createComponent(B2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
