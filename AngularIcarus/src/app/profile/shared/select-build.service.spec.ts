import { TestBed } from '@angular/core/testing';

import { SelectBuildService } from './select-build.service';

describe('SelectBuildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectBuildService = TestBed.get(SelectBuildService);
    expect(service).toBeTruthy();
  });
});
