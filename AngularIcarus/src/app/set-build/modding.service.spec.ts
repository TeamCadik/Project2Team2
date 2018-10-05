import { TestBed } from '@angular/core/testing';

import { ModdingService } from './modding.service';

describe('ModdingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModdingService = TestBed.get(ModdingService);
    expect(service).toBeTruthy();
  });
});
