import { TestBed } from '@angular/core/testing';

import { GuardservicesGuard } from './guardservices.guard';

describe('GuardservicesGuard', () => {
  let guard: GuardservicesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardservicesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
