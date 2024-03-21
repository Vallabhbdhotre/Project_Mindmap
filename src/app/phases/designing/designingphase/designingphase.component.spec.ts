import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigningphaseComponent } from './designingphase.component';

describe('DesigningphaseComponent', () => {
  let component: DesigningphaseComponent;
  let fixture: ComponentFixture<DesigningphaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesigningphaseComponent]
    });
    fixture = TestBed.createComponent(DesigningphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
