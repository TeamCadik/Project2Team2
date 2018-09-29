import { TestBed } from '@angular/core/testing';

import { ItemMemService } from './item-mem.service';

describe('ItemMemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemMemService = TestBed.get(ItemMemService);
    expect(service).toBeTruthy();
  });
});
