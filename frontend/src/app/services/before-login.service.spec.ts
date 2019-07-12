import { TestBed } from '@angular/core/testing';

import { BeforeLoginService } from './before-login.service';

describe('BeforeLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeforeLoginService = TestBed.get(BeforeLoginService);
    expect(service).toBeTruthy();
  });
});
