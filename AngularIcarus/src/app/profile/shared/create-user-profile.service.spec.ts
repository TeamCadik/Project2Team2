import { TestBed } from '@angular/core/testing';

import { CreateUserProfileService } from './create-user-profile.service';

describe('CreateUserProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateUserProfileService = TestBed.get(CreateUserProfileService);
    expect(service).toBeTruthy();
  });
});
