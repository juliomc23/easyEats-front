import { TestBed } from '@angular/core/testing';

import { RefreshAccessTokenService } from './refresh-access-token.service';

describe('RefreshAccessTokenService', () => {
  let service: RefreshAccessTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshAccessTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
