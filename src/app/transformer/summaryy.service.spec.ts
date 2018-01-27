import { TestBed, inject } from '@angular/core/testing';

import { SummaryyService } from './summaryy.service';

describe('SummaryyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryyService]
    });
  });

  it('should be created', inject([SummaryyService], (service: SummaryyService) => {
    expect(service).toBeTruthy();
  }));
});
