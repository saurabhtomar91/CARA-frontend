import { TestBed } from '@angular/core/testing';

import { CifService } from './cif.service';

describe('CifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CifService = TestBed.get(CifService);
    expect(service).toBeTruthy();
  });
});
