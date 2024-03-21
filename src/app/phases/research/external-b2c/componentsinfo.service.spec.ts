import { TestBed } from '@angular/core/testing';

import { ComponentsinfoService } from './componentsinfo.service';

describe('ComponentsinfoService', () => {
  let service: ComponentsinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
