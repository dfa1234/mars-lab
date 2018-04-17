import { TestBed, inject } from '@angular/core/testing';

import { RoversService } from './rovers.service';

describe('RoversService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoversService]
    });
  });

  it('should be created', inject([RoversService], (service: RoversService) => {
    expect(service).toBeTruthy();
  }));
});
