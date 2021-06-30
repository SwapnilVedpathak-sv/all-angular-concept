import { TestBed } from '@angular/core/testing';

import { PreferencesCheckGuard } from './preferences-check.guard';

describe('PreferencesCheckGuard', () => {
  let guard: PreferencesCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferencesCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
