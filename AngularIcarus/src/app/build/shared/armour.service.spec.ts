import { TestBed } from '@angular/core/testing';

import { ArmourService } from './armour.service';

describe('ArmourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArmourService = TestBed.get(ArmourService);
    expect(service).toBeTruthy();
  });
});
