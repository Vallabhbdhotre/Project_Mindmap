import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2c2Component } from './b2c2.component';

describe('B2c2Component', () => {
  let component: B2c2Component;
  let fixture: ComponentFixture<B2c2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2c2Component]
    });
    fixture = TestBed.createComponent(B2c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
