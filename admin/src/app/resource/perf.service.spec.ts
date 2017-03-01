/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerfService } from './perf.service';

describe('PerfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfService]
    });
  });

  it('should ...', inject([PerfService], (service: PerfService) => {
    expect(service).toBeTruthy();
  }));
});
