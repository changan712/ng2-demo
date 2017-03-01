/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService]
    });
  });

  it('should ...', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
