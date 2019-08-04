import { TestBed } from '@angular/core/testing';

import { IonicCoreService } from './ionic-core.service';

describe('IoniCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicCoreService = TestBed.get(IonicCoreService);
    expect(service).toBeTruthy();
  });
});
