import { TestBed } from '@angular/core/testing';

import { AfterLoginService } from './after-login.service';

describe('AfterLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfterLoginService = TestBed.get(AfterLoginService);
    expect(service).toBeTruthy();
  });
});
