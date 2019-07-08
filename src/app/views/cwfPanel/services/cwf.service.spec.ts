import { TestBed } from '@angular/core/testing';

import { CwfService } from './cwf.service';

describe('CwfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CwfService = TestBed.get(CwfService);
    expect(service).toBeTruthy();
  });
});
