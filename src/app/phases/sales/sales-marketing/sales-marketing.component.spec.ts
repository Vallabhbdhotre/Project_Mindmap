import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMarketingComponent } from './sales-marketing.component';

describe('SalesMarketingComponent', () => {
  let component: SalesMarketingComponent;
  let fixture: ComponentFixture<SalesMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesMarketingComponent]
    });
    fixture = TestBed.createComponent(SalesMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
