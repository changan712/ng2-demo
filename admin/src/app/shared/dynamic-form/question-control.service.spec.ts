/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionControlService } from './question-control.service';

describe('QuestionControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionControlService]
    });
  });

  it('should ...', inject([QuestionControlService], (service: QuestionControlService) => {
    expect(service).toBeTruthy();
  }));
});
