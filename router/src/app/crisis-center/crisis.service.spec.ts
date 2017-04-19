import { TestBed, inject } from '@angular/core/testing';

import { CrisisService } from './crisis.service';

describe('CrisisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrisisService]
    });
  });

  it('should ...', inject([CrisisService], (service: CrisisService) => {
    expect(service).toBeTruthy();
  }));
});
