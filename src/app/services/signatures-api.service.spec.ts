import { TestBed } from '@angular/core/testing';

import { SignaturesAPIService } from './signatures-api.service';

describe('SignaturesAPIService', () => {
  let service: SignaturesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignaturesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
